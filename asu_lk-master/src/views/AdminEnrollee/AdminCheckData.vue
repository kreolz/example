<template>
    <v-container fluid>
        <v-row align="stretch" justify="center" dense>
                <v-col md="8" lg="6">
                    <v-tabs v-model="tab">
                        <v-tab key="filtr">
                            Отфильтрованный
                        </v-tab>
                        <v-tab key="full">
                            Полный
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item key="filtr">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        Пользователь на проверку: {{enrolleeList.length}} <br>
                                        Отфильтрованных  пользователей: {{filterEnrollee.length}}
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-row dense="">
                                        <v-col>
                                            <v-chip color="green lighten-3">Перенесен в Базу "Абитуриент"</v-chip>
                                        </v-col>
                                        <v-col>
                                            <v-chip color="red lighten-3">Удален</v-chip>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-text-field
                                                v-model="searchEnrollee"
                                                label="Поиск по ФИО"
                                        />
                                        <v-menu
                                                ref="menu"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                :return-value.sync="date"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                        v-model="date"
                                                        label="Дата регистрации"
                                                        prepend-icon="event"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker first-day-of-week="1" v-model="date" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu = false">Закрыть</v-btn>
                                                <v-btn text color="primary" @click="$refs.menu.save(date)">Выбрать дату</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <v-switch v-model="onlyAbiturDate" label="Скрыть пользователей, которые были перенесены в базу 'Абитуриент'"/>
                                        <v-switch v-model="onlyDeletedDate" label="Скрыть удаленных пользователей"/>
                                        <h3 class="text-right">Записей в списке: {{filterEnrollee.length}}</h3>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider class="mb-1" />
                                <v-virtual-scroll
                                                :items="filterEnrollee"
                                                :item-height="100"
                                                height="500"
                                >
                                    <template v-slot="{item}">
                                        <v-list-item
                                                     :key="item.id"
                                                     :class="{'red lighten-3': item.isDeleted, 'green lighten-3': item.isTransfered}"
                                                     style="border-bottom: 1px solid #eee"
                                                     three-line>
                                            <v-list-item-content>
                                                <v-list-item-title class="display-1">
                                                    {{item.lastName}} {{item.firstName}} {{item.patronymic}}
                                                </v-list-item-title>
                                                <v-list-item-subtitle class="text--primary">
                                                    {{item.email}}
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle>
                                                    {{dateToNormal(item.registration)}}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-spacer/>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn  @click="copy(item.email)" fab v-bind="attrs"
                                                            v-on="on">
                                                        <v-icon>
                                                            mdi-content-copy
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Скопировать Email абитуриента</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            fab
                                                            color="green"
                                                            class="white--text"
                                                            @click="transferUser(item.id)">
                                                        <v-icon>
                                                            mdi-cloud-check
                                                        </v-icon>
                                                        <!--                                        Сохранить в Базу данных "Абитуриент"-->
                                                    </v-btn>
                                                </template>
                                                <span>Сохранить в Базу данных "Абитуриент"</span>
                                            </v-tooltip>

                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs}">
                                                    <v-btn
                                                            v-on="on"
                                                            v-bind="attrs"
                                                            fab
                                                            color="blue"
                                                            class="white--text"
                                                            @click="unlock(item.id)">
                                                        <v-icon>
                                                            mdi-lock-open
                                                        </v-icon>
                                                        <!--                                        Разблокировать-->
                                                    </v-btn>
                                                </template>
                                                <span>Разблокировать учетную запись</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs}">
                                                    <v-btn
                                                            v-on="on"
                                                            v-bind="attrs"
                                                            fab
                                                            color="orange"
                                                            class="white--text"
                                                            @click="confirmediting(item.id)">
                                                        <v-icon>
                                                            mdi-lock
                                                        </v-icon>
                                                        <!--                                        Заблокировать-->
                                                    </v-btn>
                                                </template>
                                                <span>Заблокировать учетную запись</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs}">
                                                    <v-btn
                                                            v-on="on"
                                                            v-bind="attrs"
                                                            fab
                                                            color="red"
                                                            class="white--text"
                                                            style="margin-left: 10px;"
                                                            @click="deleteEnrollee(item.id)">
                                                        <v-icon>
                                                            mdi-delete
                                                        </v-icon>
                                                        <!--                                        Заблокировать-->
                                                    </v-btn>
                                                </template>
                                                <span>Удалить учетную запись</span>
                                            </v-tooltip>
                                        </v-list-item>
                                    </template>
                                </v-virtual-scroll>
                            </v-list>
                        </v-tab-item>
                        <v-tab-item key="full">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        Пользователь на проверку: {{enrolleeList.length}} <br>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                        <v-row dense="">
                                            <v-col>
                                                <v-chip color="green lighten-3">Перенесен в Базу "Абитуриент"</v-chip>
                                            </v-col>
                                            <v-col>
                                                <v-chip color="red lighten-3">Удален</v-chip>
                                            </v-col>
                                        </v-row>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                        v-model="searchEnrolleeFull"
                                                        label="Поиск по ФИО"
                                                />
                                            </v-col>
                                            <v-col>
                                                <v-switch v-model="onlyAbitur" label="Скрыть пользователей, которые были перенесены в базу 'Абитуриент'"/>
                                                <v-switch v-model="onlyDeleted" label="Скрыть удаленных пользователей"/>
                                                <h3 class="text-right">Записей в списке: {{filterFullEnrollee.length}}</h3>
                                            </v-col>
                                        </v-row>

                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider class="mb-1" />
                            </v-list>
                            <v-virtual-scroll
                                    :items="filterFullEnrollee"
                                    :item-height="100"
                                    height="500">
                                    <template v-slot=" { item } ">
                                        <v-list-item :key="item.id"
                                                     style="border-bottom: 1px solid #eee"
                                                     :class="{'red lighten-3': item.isDeleted, 'green lighten-3': item.isTransfered}"
                                                     three-line>
                                            <v-list-item-content>
                                                <v-list-item-title class="display-1">
                                                    {{item.lastName}} {{item.firstName}} {{item.patronymic}}
                                                </v-list-item-title>
                                                <v-list-item-subtitle class="text--primary">
                                                    {{item.email}}
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle>
                                                    {{item.registrationMoment}}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-spacer/>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn  @click="copy(item.email)" fab v-bind="attrs"
                                                            v-on="on">
                                                        <v-icon>
                                                            mdi-content-copy
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Скопировать Email абитуриента</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            fab
                                                            color="green"
                                                            class="white--text"
                                                            @click="transferUser(item.id)">
                                                        <v-icon>
                                                            mdi-cloud-check
                                                        </v-icon>
                                                        <!--                                        Сохранить в Базу данных "Абитуриент"-->
                                                    </v-btn>
                                                </template>
                                                <span>Сохранить в Базу данных "Абитуриент"</span>
                                            </v-tooltip>

                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs}">
                                                    <v-btn
                                                            v-on="on"
                                                            v-bind="attrs"
                                                            fab
                                                            color="blue"
                                                            class="white--text"
                                                            @click="unlock(item.id)">
                                                        <v-icon>
                                                            mdi-lock-open
                                                        </v-icon>
                                                        <!--                                        Разблокировать-->
                                                    </v-btn>
                                                </template>
                                                <span>Разблокировать учетную запись</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs}">
                                                    <v-btn
                                                            v-on="on"
                                                            v-bind="attrs"
                                                            fab
                                                            color="orange"
                                                            class="white--text"
                                                            @click="confirmediting(item.id)">
                                                        <v-icon>
                                                            mdi-lock
                                                        </v-icon>
                                                        <!--                                        Заблокировать-->
                                                    </v-btn>
                                                </template>
                                                <span>Заблокировать учетную запись</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs}">
                                                    <v-btn
                                                            v-on="on"
                                                            v-bind="attrs"
                                                            fab
                                                            color="red"
                                                            class="white--text"
                                                            style="margin-left: 10px;"
                                                            @click="deleteEnrollee(item.id)">
                                                        <v-icon>
                                                            mdi-delete
                                                        </v-icon>
                                                        <!--                                        Заблокировать-->
                                                    </v-btn>
                                                </template>
                                                <span>Удалить учетную запись</span>
                                            </v-tooltip>
                                        </v-list-item>
                                    </template>
                            </v-virtual-scroll>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import moment from '@/plugins/moment'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "AdminCheckData",
        data(){
            return{
                searchEnrollee: '',
                searchEnrolleeFull: '',
                menu: false,
                tab: 'filter',
                enrollee: [],
                onlyAbitur: false,      // на полном списке
                onlyDeleted: false,     // на полном списке
                onlyAbiturDate: false,  // на фильтрованном списке
                onlyDeletedDate: false, // на фильтрованном списке TODO: переделать эту хуету и разбить списки на компоненты
                date: new Date().toISOString().substr(0, 10),
            }
        },
        computed:{
            ...mapState('admin', {
                enrolleeList: 'enrolleeList'
            }),
            filterFullEnrollee(){
                return this.enrolleeList.filter(item => {
                        if (this.onlyAbitur){
                            return (item.lastName+' '+item.firstName+' '+ item.patronymic).toLowerCase().indexOf(this.searchEnrolleeFull.toLowerCase()) == 0
                                    && item.isTransfered!=this.onlyAbitur
                        } else{
                            return (item.lastName+' '+item.firstName+' '+ item.patronymic).toLowerCase().indexOf(this.searchEnrolleeFull.toLowerCase()) == 0
                        }
                    }
                ).sort((a, b)=>{
                    let aFullName = a.lastName+' '+ a.firstName+ ' '+a.patronymic
                    let bFullName = b.lastName+' '+ b.firstName+ ' '+b.patronymic
                    if (aFullName> bFullName) {
                        return 1;
                    }
                    if (aFullName < bFullName) {
                        return -1;
                    }
                    return 0;
                }).filter( item => {
                    if (this.onlyDeleted==true){
                        return item.isDeleted==false
                    }else{
                        return true
                    }
                })
            },
            filterEnrollee(){
                let enr = this.enrolleeList.filter(item => {
                    return moment(item.registration.substr(0, 10)).calendar()=== moment(this.date).calendar()
                })
                return enr.filter(item => {
                        return (item.lastName+' '+item.firstName+' '+ item.patronymic).toLowerCase().indexOf(this.searchEnrollee.toLowerCase()) == 0
                    }
                ).sort((a, b)=>{
                    let aFullName = a.lastName+' '+ a.firstName+ ' '+a.patronymic
                    let bFullName = b.lastName+' '+ b.firstName+ ' '+b.patronymic
                    if (aFullName> bFullName) {
                        return 1;
                    }
                    if (aFullName < bFullName) {
                        return -1;
                    }
                    return 0;
                }).filter(item => this.onlyAbiturDate ? item.isTransfered==false:true)
                    .filter(item => this.onlyDeletedDate ? item.isDeleted==false:true)

            },
        },
        methods:{
            ...mapActions({
                transfer: 'admin/transfer',
                getEnrolleeList: 'admin/get_enrollee_list',
                unlock: 'admin/unlock',
                confirmediting: 'admin/confirmediting',
                deleteEnrollee: 'admin/delete_enrollee'
            }),
            transferUser(id){
                this.transfer(id)
                this.getEnrolleeList()
            },
            dateToNormal(date){
                let a = moment(date)
                return a.calendar()
            },
            copy(email){
                this.$copyText(email).then(()=> {
                    this.$toast.success('Email: '+email+' скопирован')
                }).catch(()=>{
                    this.$toast.success('При копировании Email: '+email+' произошла ошибка')
                })
            },
        },
        async mounted() {
            this.$store.dispatch('authorization/start')
            await this.getEnrolleeList()
            this.enrollee = this.enrolleeList.map(item=>{
                item.registrationMoment = moment(item.registration).calendar()
                return item
            })
        }
    }
</script>

<style scoped>

</style>
