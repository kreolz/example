<template>
  <div>
    <v-subheader class="subtitle-1">Консультации на сегодня</v-subheader>
    <v-data-table
        :items="consultations"
        :headers="headers"
        items-per-page="8"
        :footer-props="{disableItemsPerPage: true, itemsPerPageOptions: [8,5]}"
    >
      <template v-slot:item.ringingTime="{ item }">
        {{ item.beginTime}} -
        {{ item.endTime}}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ConsultationsToday",
  data(){
    return{
      headers: [
        {
          text: 'Преподаватель',
          value: 'fullName'
        },
        {
          text: 'Время',
          value: 'ringingTime',
          sortable: false,
          align: 'center'
        },
        {
          text: 'Аудитория',
          value: 'room',
          sortable: false,
          align: "center"
        },
      ]
    }
  },
  computed:{
    ...mapState('timetable', [
        'consultations'
    ])
  }
}
</script>

<style scoped>

</style>
