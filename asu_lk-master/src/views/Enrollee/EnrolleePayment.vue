<template>
    <v-container>
        <v-row>
            <v-col>
                <material-card>
                    <template v-slot:heading>
                        <div class="display-2">
                            Оплата за обучение
                        </div>
                    </template>
                    <v-row>
                        <v-col>
                            <v-file-input
                                label="Загрузите чек об оплате"/>
                        </v-col>
                    </v-row>
                </material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    export default {
        name: "EnrolleePayment",
        components: {MaterialCard}
    }
</script>

<style scoped>

</style>
