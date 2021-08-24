<template>
  <v-card  class="news-wrapper elevation-1">
    <v-carousel
        :continuous="false"
        :cycle="true"
        :show-arrows="true"
        hide-delimiters
        hide-delimiter-background
        interval="15000"
    >
      <v-carousel-item
          v-for="newsPaper in news"
          :key="newsPaper.id"
      >
        <v-card flat>
          <v-img height="200px" :src="'https://rb.asu.ru'+newsPaper.images[0].fileName"></v-img>
          <v-card-actions class="actions">
            <v-btn fab>
              <v-icon>
                mdi-volume-high
              </v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text class="title">{{ newsPaper.name }}</v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "HomeNews",
  data: () => ({
    model: null,
  }),
  computed: {
    ...mapState('news', {
      news: 'news'
    })
  },
  methods: {
    ...mapActions('news', {
      getNews: 'get_news'
    })
  },
  created() {
    this.getNews()
  }
}
</script>

<style scoped>
.news-wrapper{

}
</style>
