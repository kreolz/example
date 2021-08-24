<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        :loading="loadingItems"
        loading-text="Загрузка... Пожалуйста, подождите"
        :search="search"
    >
      <template v-slot:top>
        <v-text-field v-model="search" label="Начните ввод для поиска" class="mx-4" />
      </template>
      <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="mdi-warning">
        Поиск по "{{ search }}" не дал результатов.
      </v-alert>
      <template v-slot:item.ringingTime="{ item }">
        {{ item.beginTime}} -
        {{ item.endTime}}
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "SKEDList",
  props: {
    items: {
      type: Array
    },
    search: {
      type: String,
      default: ''
    },
    loadingItems: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return{
      headers: [
        {
          text: 'Преподаватель',
          align: 'left',
          value: `fullName`,
        },
        {
          text: 'Дата',
          align: 'left',
          value: 'date'
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
      ],
    }
  }
}
</script>

<style scoped>

</style>
