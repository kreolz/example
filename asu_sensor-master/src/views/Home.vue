<template>
  <div class="home-page">
      <div id="clock">
        <home-clock />
      </div>
      <div id="news">
        <home-news />
      </div>
      <div id="subject-commissions-fast">
        <subject-commissions-fast-link />
      </div>
      <div id="consultations-today">
        <consultations-today />
      </div>
    </div>
</template>

<script>
import HomeClock from "@/components/Home/HomeClock";
import HomeNews from "@/components/Home/HomeNews";
import ConsultationsToday from "@/components/Consultations/ConsultationsToday";
import SubjectCommissionsFastLink from "@/components/SubjectCommisions/SubjectCommissionsFastLink";
export default {
name: "Home",
  components: {
    SubjectCommissionsFastLink,
    ConsultationsToday,
    HomeNews,
    HomeClock
}
}
</script>

<style scoped>
.home-page{
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 1fr  150px 2fr;
  border-radius: 50px 0 0 50px;
  height: 100vh;

}
#clock{
  grid-area: 1 / 1 / span 1 / span 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 256px;
}

#news{
  grid-area: 1 / 2 / span 2 / span 1;
  padding: 10px;
  height: 420px;
  overflow-x: hidden;
}
#subject-commissions-fast{
  grid-area: 2 / 1 / span 1 / span 1;
}
#retakes-today{
  grid-area: 3 / 1 / span 1 /span 1;
}
#consultations-today{
  grid-area: 3 / 2 / span 1 / span 1;
}
</style>
