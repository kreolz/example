<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-row justify="center">
                    <v-col cols="12" md="6">
                        <v-subheader class="subtitle-2">
                            Добавьте данные нового телефона
                        </v-subheader>
                        <v-form>
                            <v-text-field
                                    v-model="phone.value"
                                    type="phone"
                                    label="Номер телефона"
                            />
                            <v-text-field
                                    v-model="phone.note"
                                    type="text"
                                    label="Примечание"
                            />
                            <v-row justify="end">
                                <v-btn  color="primary"
                                        @click="addPhone()"
                                >
                                    Добавить
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
                <v-subheader class="display-1">
                    Сохраненные телефонные номера
                </v-subheader>
                <v-simple-table>
                    <thead>
                        <tr>
                            <td>Номер телефона</td>
                            <td>Примечание</td>
                            <td>Действие</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="phones.length==0">
                            <td>Данные не сохранены</td>
                        </tr>
                        <tr v-else v-for="phone in phones" :key="phone.id">
                            <td>{{phone.phoneValue}}</td>
                            <td>{{phone.note}}</td>
                            <td>
                                <v-btn
                                    icon
                                    @click="deletePhone(phone.id)"
                                >
                                    <v-icon>
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>

            </v-col>
            <v-col cols="12" hidden>
                <v-subheader>
                    Социальные сети
                </v-subheader>
                <v-simple-table>
                    <thead>
                        <tr>
                            <td>URL</td>
                            <td>Примечание</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="social in socials" :key="social.id">
                        <td>{{social.url}}</td>
                        <td>{{social.note}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
                <v-form>
                    <v-text-field
                            v-model="soc.url"
                            type="text"
                            label="URL-адрес вашей страницы"
                    />
                    <v-text-field
                            v-model="soc.note"
                            type="text"
                            label="Примечание"
                    />
                    <v-btn
                            @click="addSoc()"
                    >
                        Добавить
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapMultiRowFields} from 'vuex-map-fields'
    import { mapActions } from 'vuex'
    export default {
        name: "EnrolleeProfileContact",
        data(){
            return{
                phone: {
                    value: '',
                    note: '',
                    priority: 1,
                },
                soc: {
                    url: '',
                    note: '',
                }
            }
        },
        computed:{
            ...mapMultiRowFields('enrollee', {
                phones: 'phones',
                socials: 'socials'
            })
        },
        methods:{
            ...mapActions('enrollee',{
                setPhone: 'set_phone',
                getPhones: 'get_phones',
                deletePhone: 'delete_phone',
                setSocial: 'set_social',
                getSocials: 'get_socials',
            }),
            addPhone(){
                this.setPhone(this.phone)
                this.phone = {
                    value: '',
                    note: '',
                    priority: '',
                }
            },
            addSoc(){
                this.setSocial(this.soc)
                this.soc = {
                    url: '',
                    note: '',
                }
            }
        },
        mounted() {
            this.getPhones()
            //this.getSocials()
        }
    }
</script>

<style scoped>

</style>
