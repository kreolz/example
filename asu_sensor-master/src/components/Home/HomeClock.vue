<template>
  <div class="date-time">
    <div class="date">
      <div class="day">
        {{day}}
      </div>
      <div class="month">
        {{month}}
      </div>
    </div>
    <div class="time">
      {{ hour }} <span class="separate_clock">:</span> {{ min }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeClock',
  data () {
    return {
      hour: '--',
      min: '--',
      secs: '--',
      month: '--',
      day: '--',
    }
  },
  props:{
    typeClock: String
  },
  created(){
    this.startClock();
  },
  computed:{

  },
  methods: {
    startClock(){
      setInterval( ()=>{
        let date = new Date()
        let hour = date.getHours(),
            min = date.getMinutes();
        // Set Display
        this.hour = (hour < 10) ? '0' + hour : hour;
        this.min = (min < 10) ? '0' + min : min;
        this.month = date.toLocaleDateString('default', { month: 'short'}).toUpperCase().substring(0, 3)
        this.day = date.getDate()
      }, 100);

    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.separate_clock{
  animation: separator-dot-clock;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes separator-dot-clock {
  from{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
.date-time{
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr 1fr;
  color: rgb(3,153,238);
  font-weight: bold;
  height: 200px;
  background: inherit;
}
.date-time .date{
  grid-area: 1 / 1 / span 2 / span 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.date-time .day{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 4rem;
  line-height: 3rem;
  height: 100%;
  color: #FF5252;

}
.date-time .month{
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  line-height: 2rem;
  height: 100%;
}
.date-time .time{
  grid-area: 1 / 2 / span 2 / span 1;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
