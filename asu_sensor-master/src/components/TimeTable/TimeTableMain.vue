<template>
  <div
      class="timetable"
      :class="{'horizontal': orientationTimeTable=='horizontal'}"
  >
      <div
          class="timetable-control"
          :class="{'horizontal': orientationTimeTable=='horizontal'}"
      >
          <div class="timetable-close"
               :class="{'horizontal': orientationTimeTable=='horizontal'}"
          >
            <v-btn
                  text
                  block
                  @click="exit"
            >
              <v-icon>
                mdi-keyboard-backspace
              </v-icon> Назад
            </v-btn>
          </div>
          <div
              class="timetable-info"
              :class="{'horizontal': orientationTimeTable=='horizontal'}">
            Расписание для
            <div>{{valueTimeTable.name}}</div>
          </div>
          <v-btn
                @click="getTimeTableNowDay()"
                color="blue"
                class="white--text"
                height="50"
          >
            Сегодня
          </v-btn>
          <v-btn
                @click="getTimeTableNextDay"
                color="green"
                class="white--text"
                height="50"
          >
            Завтра
          </v-btn>
          <v-btn-toggle

          >
            <v-btn
                  @click="prevDay()"
                  height="50px"
            >
              <v-icon>
                mdi-arrow-left
              </v-icon>
            </v-btn>
            <v-btn
                height="50px"
            >
              {{date.toLocaleDateString('ru-RU')}}
            </v-btn>
            <v-btn
                  @click="nextDay()"
                  height="50px"
            >
              <v-icon>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-btn-toggle>
      </div>
    <div class="timetable-lessons">
        <time-table-lesson
            v-for="(pair, i) in timetable[0].timeTable"
            :pair="pair"
            :load-time-table="isLoading"
            :key="i"/>
    </div>
  </div>
</template>

<script>
import TimeTableLesson from "@/components/TimeTable/Lessons/TimeTableLesson";
import APITimeTableServices from "@/services/API/APITimeTableServices";
import APIExtractionDataServices from "@/services/API/APIExtractionDataServices";
export default {
name: "TimeTableMain",
  components: {TimeTableLesson},
  props:{
    valueTimeTable: {
      id: String,
      value: String,
    },
    typeTimeTable: String,
    orientationTimeTable: {
      type: String,
      default: 'vertical'
    }
  },
  data(){
    return{
      isLoading: true,
      timetable: [
        {
          date: '',
          timeTable: []
        }
      ],
      date: '',
    }
  },
  methods:{
    exit(){
      this.$emit('exit')
    },
    sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async getTimeTable(){
      this.isLoading = true
        try {
          let start = new Date()
          let dirtyTimeTable = await APITimeTableServices.getTimeTable({
            typeTimeTable: this.typeTimeTable,
            timePeriod: 'Day',
            valueTimeTable: this.valueTimeTable.id,
            date: `${this.date.getFullYear()}.${this.date.getMonth()+1}.${this.date.getDate()}`,
            fullData: true,
          })
          if ((new Date()-start)<1000) await this.sleep(500)
          this.timetable = APIExtractionDataServices.extract(dirtyTimeTable)
        }catch (e) {
          console.log(e)
        }
      this.isLoading = false
    },
    async getTimeTableNowDay(){
      let nowDate = new Date()
      this.date.setDate(nowDate.getDate())
      await this.getTimeTable()
    },
    async getTimeTableNextDay(){
      let nowDate = new Date()
      this.date.setDate(nowDate.getDate()+1)
      await this.getTimeTable()
    },
    async nextDay(){
      this.date.setDate(this.date.getDate()+1)
      await this.getTimeTable()
    },
    async prevDay(){
      this.date.setDate(this.date.getDate()-1)
      await this.getTimeTable()
    }
  },
  watch:{
    valueTimeTable: function (){
      this.getTimeTable()
    }
  },
  computed:{
    dateTimeTable(){
      return this.date.toLocaleDateString('ru-RU')
    }
  },
  async mounted() {
  await this.getTimeTable()
  },
  created() {
      this.date = new Date()
  }
}
</script>

<style scoped>
  .timetable{
    position: relative;
    height: 100vh;
    width: 100%;
    background: white;
    display: grid;
    grid-template-columns: 2fr 10fr;
    padding: 10px;
  }
  .timetable-control{
    padding:  5px;
  }
  .timetable-info{
    margin-bottom: 10px;
  }
  .timetable-lessons{
    padding: 0 0 0 10px;
  }
  .timetable.horizontal{
    display: grid;
    grid-template-columns: 5fr;
    grid-template-rows: auto 1fr;
  }
  .timetable-info.horizontal{
    display: none;
  }
  .timetable-control.horizontal{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .timetable-close.horizontal{
    display: none;
  }

</style>
