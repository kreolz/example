<template>
    <div>
        <v-sheet v-if="loadTimeTable">
            <v-skeleton-loader
                    ref="skeleton"
                    :loading="loadTimeTable"
                    type="list-item-two-line"
                    class="mx-auto"
            />
        </v-sheet>
        <span v-else v-for="group in groups" :key="group.id">
            {{group.name}};
        </span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "ClassicGroupLesson",
        props:{
            groups: Array
        },
        computed:{
            ...mapState('timetable',{
                loadTimeTable: 'loadTimeTable'
            })
        }
    }
</script>

<style scoped>

</style>
