<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-subheader class="display-1">
                    Индивидуальные достижения учитываются только при поступлении на высшее образование.
                    При равенстве среднего балла аттестата при поступлении на среднее профессиональное образование институт вправе запросить портфолио (за последние 2 года обучения). Портфолио предоставляется лично в институт.
                </v-subheader>
            </v-col>
            <v-col>
                <v-select
                        v-model="achievement"
                        :items="achievements"
                        item-value="id"
                        @change="setAchievement"
                    label="Достижение">
                    <template slot="selection" slot-scope="{ item }">
                        {{item.value}} <v-chip class="red--text">+ {{item.weight}}</v-chip>
                    </template>
                    <template slot="item" slot-scope="{ item }">
                        <v-row dense>
                            <v-col cols="11">
                                {{item.value}}
                            </v-col>
                            <v-col>
                                <v-chip class="red--text">+ {{item.weight}}</v-chip>
                            </v-col>
                        </v-row>
                    </template>
                </v-select>
            </v-col>
        </v-row>
        <v-row align="end">
            <v-col cols="6">
                <v-btn @click="deleteAchievement">
                    Удалить достижение
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import { mapFields } from 'vuex-map-fields'
    export default {
        name: "EnrolleeProfileAchievement",
        computed:{
            ...mapState('catalog', {
                achievements: 'achievements'
            }),
            ...mapFields('enrollee', {
                achievement: 'achievement.achievementId'
            })
        },
        methods: {
            ...mapActions({
                getAchievements: 'catalog/get_achievements',
                getAchievement: 'enrollee/get_achievement',
                setAchievement: 'enrollee/set_achievement',
                deleteAchievement: 'enrollee/delete_achievement'
            })
        },
        mounted() {
            this.getAchievements()
            this.getAchievement()
        }
    }
</script>

<style scoped>

</style>
