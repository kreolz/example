<template>
    <v-container>
        <v-form @submit.prevent="set_registration_info()">
            <v-row>
                <v-col
                >
                    <v-subheader>
                        Адрес прописки
                    </v-subheader>
                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <v-combobox
                                    v-model="regState"
                                    :loading="loadingReg"
                                    :items="addresses"
                                    :search-input.sync="searchReg"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Место регистрации"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-combobox
                                    v-model="regStreet"
                                    :loading="loadingStreetReg"
                                    :items="streets"
                                    :search-input.sync="searchStreetReg"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Улица"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-text-field
                                    v-model="regHouse"
                                    label="Дом"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-text-field
                                    v-model="regFlat"
                                    label="Квартира"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-text-field
                                    v-model="regIndex"
                                    label="Индекс"
                            />
                        </v-col>
                    </v-row>
                    <v-subheader>
                        Адрес проживания
                    </v-subheader>
                    <v-switch
                            v-model="coincides"
                            label="Совпадает"
                    />
                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <v-combobox
                                    :disabled="coincides"
                                    v-model="liveState"
                                    :loading="loadingLive"
                                    :items="addresses"
                                    :search-input.sync="searchLive"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Место проживания"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-combobox
                                    v-model="liveStreet"
                                    :disabled="coincides"
                                    :loading="loadingStreetLive"
                                    :items="streets"
                                    :search-input.sync="searchStreetLive"
                                    cache-items
                                    flat
                                    hide-no-data
                                    hide-details
                                    label="Улица"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-text-field
                                    v-model="liveHouse"
                                    :disabled="coincides"
                                    label="Дом"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-text-field
                                    v-model="liveFlat"
                                    :disabled="coincides"
                                    label="Квартира"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <v-text-field
                                    v-model="liveIndex"
                                    :disabled="coincides"
                                    label="Индекс"
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
    import { mapFields } from 'vuex-map-fields'
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "EnrolleeProfileRegistration",
        data() {
            return {
                placeLife: false,
                loadingReg: false,
                searchReg: null,
                selectReg: null,
                loadingLive: false,
                searchLive: null,
                selectLive: null,
                loadingStreetReg: false,
                searchStreetReg: null,
                selectStreetReg: null,
                loadingStreetLive: false,
                searchStreetLive: null,
                selectStreetLive: null,
            }
        },
        computed:{
            ...mapFields('enrollee', {
                regState: 'registration.permanent.point',
                regStreet: 'registration.permanent.street',
                regHouse: 'registration.permanent.house',
                regFlat: 'registration.permanent.flat',
                regIndex: 'registration.permanent.index',
                liveState: 'registration.live.point',
                liveStreet: 'registration.live.street',
                liveHouse: 'registration.live.house',
                liveFlat: 'registration.live.flat',
                liveIndex: 'registration.live.index',
                coincides: 'registration.coincides'
            }),
            ...mapState('catalog', {
                addresses: 'addresses',
                streets: 'streets',
            })
        },
        methods:{
            ...mapActions({
                set_registration_info: 'enrollee/set_registration_info',
                get_registration_info: 'enrollee/get_registration_info',
                get_addresses: 'catalog/get_addresses',
                get_streets: 'catalog/get_streets'
            }),
            filter(){
                this.loadingLive = true
                    this.get_addresses(this.liveState)
                this.loadingLive = false

            },
            filterStreetsLive(val){
                this.loadingStreetLive = true
                    this.get_streets(val)
                this.loadingStreetLive = false
            },
            filterStreetsReg(val){
                this.loadingStreetReg = true
                    this.get_streets(val)
                this.loadingStreetReg = false
            }
        },
        watch: {
            searchReg (val) {
                val.length>=4 && val && val !== this.regState && this.get_addresses(val)
            },
            searchLive (val) {
                val.length>=4 && val && val !== this.liveState && this.get_addresses(val)
            },
            searchStreetReg (val) {
                val.length>=3 && val && val !== this.regStreet && this.filterStreetsReg(val)
            },
            searchStreetLive (val) {
                val.length>=3 && val && val !== this.liveStreet && this.filterStreetsLive(val)
            },
        },
        mounted() {
            this.get_registration_info()
        }
    }
</script>

<style scoped>

</style>
