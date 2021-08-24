<template>
    <v-container>
        <v-row>
            <v-col
                    cols="12"
                    md="6"
            >
                <v-text-field
                        v-model="snils"
                    label="СНИЛС"
                    />
            </v-col>
            <v-col
                    cols="12"
                    md="6"
            >
                <v-text-field
                        v-model="inn"
                        label="ИНН"
                />
            </v-col>
            <v-col
                    cols="12"
                    md="6"
            >
                <v-btn @click="setOtherInfo()">
                    Сохранить
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    import { mapActions}  from 'vuex'
    import { mapFields} from 'vuex-map-fields'
    export default {
        name: "EnrolleeProfileOther",
        components: {MaterialCard},
        computed:{
            ...mapFields('enrollee', {
                inn: 'other.inn',
                snils: 'other.snils'
            })
        },
        methods:{
            ...mapActions('enrollee', {
                setOtherInfo: 'set_other_info',
                getOtherInfo: 'get_other_info'
            })
        },
        mounted() {
            this.getOtherInfo()
        }
    }
</script>

<style scoped>

</style>
