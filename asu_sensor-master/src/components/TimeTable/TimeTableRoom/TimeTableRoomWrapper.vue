<template>
  <div class="timetable-room">
    <div class="filter-control">
      <base-touche-panel
                          v-for="item in filterItems"
                          :key="item"
                          :title="Number(item) ? item+'X': item"
                          :class="{'active': item===activeFilter}"
                          @click.native="setActiveFilter(item)"
                          class="active-blue"
                          width="150px"
                          height="75px"
      >
      </base-touche-panel>
    </div>
    <div class="filter-rooms">
        <base-touche-panel
                          v-for="item in filterRooms"
                          :title="item.name"
                          :key="item.id"
                          :class="{'active': item===activeRoom}"
                          @click.native="setActiveRoom(item)"
                          class="active-red"
        >
        </base-touche-panel>
    </div>
    <v-dialog
        v-model="dialogTT"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <time-table-main :valueTimeTable="activeRoom" typeTimeTable="Room" @exit="exit" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BaseTouchePanel from "@/components/baseComponents/BaseTouchPanel";
import TimeTableMain from "@/components/TimeTable/TimeTableMain";
export default {
  name: "TimeTableRoomWrapper",
  components: {BaseTouchePanel, TimeTableMain},
  data(){
    return{
      filterItems: [10, 11, 20, 21, 22, 30, 31, 32, 'Стадион', 'Библиотека'],
      activeFilter: 10,
      activeRoom: {},
      dialogTT: false,
    }
  },
  methods:{
    exit(){
      this.dialogTT = false
    },
    setActiveFilter(filter){
      this.activeFilter = filter
    },
    setActiveRoom(room){
      this.activeRoom = room
      this.dialogTT = true
    }
  },
  computed: {
    ...mapState('catalog', {
      rooms: 'rooms'
    }),
    filterRooms(){
      return this.rooms.filter(room => room.name.search(this.activeFilter.toString()) == 0)
    }
  }
}
</script>

<style scoped>
  .timetable-room{
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-template-rows: 1fr;
    flex-wrap: wrap;
  }
  .filter-control{
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
  .filter-rooms{
    display: flex;
    justify-content: normal;
    align-items: baseline;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }
</style>
