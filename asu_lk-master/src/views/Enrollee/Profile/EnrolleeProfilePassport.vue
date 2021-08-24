<template>
    <v-container>
        <v-form @submit.prevent="set_passport_info()">
            <v-row>
                <v-col>
                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <v-select
                                    v-model="typeId"
                                    :items="typePassport"
                                    item-value="id"
                                    item-text="documentType"
                                    label="Вид документа"
                            />
                        </v-col>
                        <v-col cols="12" sm="4" md="3">
                            <v-text-field
                                    v-model="serial"
                                    label="Серия"
                            />
                        </v-col>
                        <v-col cols="12" sm="4" md="3">
                            <v-text-field
                                    v-model="number"
                                    label="Номер"
                            />
                        </v-col>
                        <v-col cols="12" sm="4" md="5">
                            <v-dialog
                                    ref="dialog"
                                    v-model="modal"
                                    :return-value.sync="datePassport"
                                    persistent
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="datePassport"
                                            label="Дата получения"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker  v-model="datePassport" first-day-of-week="1" >
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">Закрыть</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(datePassport)">Сохранить</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-combobox
                                    v-model="placeBorn"
                                    :loading="loadingAddresses"
                                    :items="addresses"
                                    :search-input.sync="searchAddresses"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Место рождения"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-combobox
                                    v-model="office"
                                    :loading="loadingOffice"
                                    :items="items"
                                    :search-input.sync="searchOffice"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Кем выдан"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row
                    justify="end"
            >
                <v-btn
                        type="submit"
                        color="primary"
                >
                    Сохранить
                </v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    import {mapFields} from 'vuex-map-fields'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "EnrolleeProfilePassport",
        components: {MaterialCard},
        data() {
            return {
                date: new Date().toISOString().substr(0, 10),
                modal: false,
                loadingOffice: false,
                searchOffice: null,
                selectOffice: null,
                loadingAddresses: false,
                searchAddresses: null,
                selectAddresses: null,
            }
        },
        computed:{
          ...mapState('catalog',{
              items: 'officePassport',
              addresses: 'addresses',
              typePassport: 'typePassport',
          }),
            ...mapFields('enrollee', {
                typeId: 'passport.typeId',
                serial: 'passport.serial',
                number: 'passport.number',
                office: 'passport.office',
                placeBorn: 'passport.placeBorn',
                datePassport: 'passport.date',
                pathCopyDocFile: 'passport.pathCopyDocFile',
            })
        },
        watch: {
            searchOffice (val) {
                val.length>=4 && val && val !== this.office && this.querySelections(val)
            },
            searchAddresses (val) {
                val.length>=4 && val && val !== this.placeBorn && this.queryAddresses(val)
            },
        },
        methods: {
            ...mapActions({
                get_office_passport:'catalog/get_office_passport',
                get_addresses: 'catalog/get_addresses',
                get_type_passport: 'catalog/get_type_passport',
                get_passport_info: 'enrollee/get_passport_info',
                set_passport_info: 'enrollee/set_passport_info',
                }
            ),
            async querySelections (v) {
                this.loading = true
                    await this.get_office_passport(v)
                this.loading = false
            },
            async queryAddresses(v){
                this.loadingAddresses = true
                    await this.get_addresses(v)
                this.loadingAddresses = false
            }
        },
        mounted() {
            this.get_type_passport()
            this.get_passport_info()
        }
    }
</script>

<style scoped>

</style>
