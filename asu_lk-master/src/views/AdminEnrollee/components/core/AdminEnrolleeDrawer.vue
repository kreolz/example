<template>
    <v-navigation-drawer
            hidden
            v-model="drawer"
            :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
            :expand-on-hover="expandOnHover"
            mobile-break-point="960"
            disable-resize-watcher
            app
            mini-variant-width="80"
            :mini-variant="miniVar"
            width="260"
            v-bind="$attrs"
    >
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-text-field
                                v-model="searchEnrollee"
                                label="Поиск по ФИО"
                                />
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mb-1" />
            <v-list-item v-for="enrollee in filterEnrollee"
                         :key="enrollee.id"
                         @click="setActiveEnrollee(enrollee.id)"
                         two-line>
                <v-list-item-content>
                    <v-list-item-title class="display-1">
                        {{enrollee.lastName}} {{enrollee.firstName}} {{enrollee.patronymic}}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{enrollee.email}}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon color="green">
                        mdi-check
                    </v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    export default {
        name: "AdminEnrolleeDrawer",
        props: {
            expandOnHover: {
                type: Boolean,
                default: false,
            },
        },
        data(){
            return{
                searchEnrollee: '',
                miniVar: false,
            }
        },
        computed:{
            ...mapState('admin', {
                enrolleeList: 'enrolleeList'
            }),
            filterEnrollee(){
                return this.enrolleeList.filter(item => {
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
                })},
            ...mapState('app', {
                barImage: 'barImage',
                barColor: 'barColor',
                drawerF: 'drawer'
            }),
            drawer: {
                get() {
                    return this.drawerF
                },
                set(val) {
                    this.SET_DRAWER(val)
                }
            }
        },
        methods:{
            ...mapActions({
                getEnrolleeList: 'admin/get_enrollee_list',
                setActiveEnrollee: 'admin/set_active_enrollee'
            }),
            ...mapMutations('app', {
                SET_DRAWER: 'SET_DRAWER'
            }),
        },
        mounted() {
            this.getEnrolleeList()
        }
    }
</script>

<style scoped>

</style>
