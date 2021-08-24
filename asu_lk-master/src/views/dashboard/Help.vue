<template>
  <v-container
    id="upgrade"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card
                color="primary"
                flat
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Справка
            </div>

            <div class="subtitle-1 font-weight-light">
              Более подробную консультацию вы можете получить по номеру телефона +7-(913)-ххх-хх-хх
            </div>
          </template>
          <v-expansion-panels
            accordion
          >
            <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
            >
              <v-expansion-panel-header>Вопрос №{{i}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                Ответ на вопрос №{{i}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',
  }
</script>

<style lang="sass">
  #upgrade
    .v-data-table
      th, td
        border: none !important
</style>
