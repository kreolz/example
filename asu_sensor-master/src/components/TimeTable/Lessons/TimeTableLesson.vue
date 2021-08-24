<template>
  <div class="lessons">
    <v-row class="lesson"
           v-bind:class="{active: activeLesson && !loadTimeTable}"
           dense>
      <v-col md="1">
        <v-sheet v-if="loadTimeTable">
          <v-skeleton-loader
              ref="skeleton"
              :loading="loadTimeTable"
              transition="fade-transition"
              type="list-item-three-line"
          />
        </v-sheet>
        <div v-else class="lesson-time" >
          <div class="lesson-number">{{pair.lessonNumber}} пара</div>
          <div class="lesson-time-schedule">
            <div class="lesson-time-begin">{{new Date(pair.startTime).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}}</div>
            <div class="lesson-time-end">{{new Date(pair.endTime).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}}</div>
          </div>
        </div>
      </v-col>
      <v-col md="11">
        <v-sheet v-if="loadTimeTable">
          <v-row>
            <v-col md="9" class="lesson-main-info">
              <v-skeleton-loader
                  ref="skeleton"
                  :loading="loadTimeTable"
                  transition="fade-transition"
                  type="list-item-three-line"
              />
            </v-col>
            <v-col md="3" class="lesson-second-info">
              <v-skeleton-loader
                  ref="skeleton"
                  :loading="loadTimeTable"
                  type="text"
              />
              <v-skeleton-loader
                  ref="skeleton"
                  :loading="loadTimeTable"
                  type="list-item-two-line"
              />
            </v-col>
          </v-row>
        </v-sheet>
        <v-row v-else v-for="lesson in pair.lessons" :key="lesson.DisciplineName" class="lesson-info" dense>
          <v-col md="9" class="lesson-main-info">
            <v-sheet v-if="loadTimeTable">
              <v-skeleton-loader
                  ref="skeleton"
                  :loading="loadTimeTable"
                  type="list-item-three-line"
                  class="mx-auto"
              />
            </v-sheet>
            <span v-else>
                        <div v-if="lesson.disciplineName">{{lesson.disciplineName}}</div>
                        <div v-if="lesson.room">Ауд.:{{lesson.room}}</div>
                        <span v-for="teacher in lesson.teachers" class="lesson-teacher" :key="teacher.FIO">
                           {{`${teacher.lastName} ${teacher.firstName} ${teacher.patronymic}`}}
                            <span v-if="teacher.position || teacher.academicDegree">
                                :
                            </span>
                            <span class="lesson-teacher-info position">{{teacher.position}}
                            </span>
                            <span v-if="teacher.academicDegree" class="lesson-teacher-info academic-degree">
                                <span v-if="teacher.position">,</span>
                                {{teacher.academicDegree}}
                            </span>
                        </span>
                    </span>
          </v-col>
          <v-col md="3" class="lesson-second-info">
            <TypeLesson v-bind:type-lesson="lesson.lessonName" v-bind:load-time-table="loadTimeTable"/>
            <GroupLesson v-bind:groups="lesson.groups" class="lesson-group"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
    import ClassicTypeLesson from "./TimeTableLessonType";
    import ClassicGroupLesson from "./TimeTableLessonGroup";

    export default {
        name:"TimeTableLesson",
        data() {
            return {}
        },
        components: {
            TypeLesson: ClassicTypeLesson,
            GroupLesson: ClassicGroupLesson
        },
        props: {
            pair: [Array, Object],
            loadTimeTable: Boolean
        }
        ,computed: {
            //подсвечивает активную лекцию
            activeLesson(){
                // let nowTime = moment().format('hh:mm');
                // return this.pair.Begin<nowTime && this.pair.End>nowTime
              return false
            }
        }
    }
</script>
<style lang="css">
    .lessons{
      max-height: 100%;
    }
    .lesson{
        border-bottom: 1px solid #dadada;
        font-size: 1.2em;
        height: 12.5%;
    }
    .lesson.active{
        background-color: #FBD2FF;
    }
    .lesson-info{
        margin-top: 5px;
        border-bottom: 1px solid #dadada;
    }
    .lesson-info:last-child{
        border-bottom: none;
    }
    .lesson-main-info{
        border-left: 3px solid #dadada;
        text-align: center;
    }
    .lesson-teacher:after{
        content: ' ;';
    }
    .lesson-teacher:last-child:after{
        content: unset;
    }
    .lesson-teacher-info{
        color: #888888;
        font-size: .9em;
    }
    .lesson-teacher-info.position{

    }
    .lesson-teacher-info.academic-degree{

    }

    .lesson-group{
        margin-top: 5px;
        padding-left: 15px;
    }
    .lesson-time{
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .lesson-time-schedule{

    }
    .lesson-time-begin{

    }
    .lesson-time-end{
        color: #888888;
    }
    .lesson-number{
       font-weight: 600;
    }
</style>
