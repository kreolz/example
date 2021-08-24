<template>
  <div>
    <v-card>
      <v-sheet v-if="!loadData">
        <v-skeleton-loader
            class="mx-auto"
            height="300px"
            type="image, article, actions"/>
      </v-sheet>
      <div v-else>
        <v-img :src="photo"/>
        <v-list two-line>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>{{infoUser.lastName+' '+infoUser.firstName[0]+'. '+infoUser.patronymic[0]+'.'}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "InfoUser",
  data(){
    return{

    }
  },
  computed:{
    ...mapState('userPage', {
      infoCard: 'infoCard',
      infoUser: 'infoPeople',
      photo: 'photo',
      loadData: 'loadData'
    })
  }
}
</script>

<style scoped>

</style>
