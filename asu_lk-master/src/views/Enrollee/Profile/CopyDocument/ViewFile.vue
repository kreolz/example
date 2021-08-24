<template>
    <v-dialog
            v-model="dialog"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
            >
                Открыть
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <v-spacer />
                <v-btn icon @click="dialog = false">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-img contain :src="url" />
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                >
                    Закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ViewFile",
        data(){
            return{
                dialog: false
            }
        },
        props:{
            url: String
        }
    }
</script>

<style scoped>

</style>
