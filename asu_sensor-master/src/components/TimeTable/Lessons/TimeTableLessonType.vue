<template>
    <div>
        <span v-if="!typeLesson.indexOf('Лекция')" class="type-lesson lecture white--text">
            Лек. зан.
        </span>
        <span v-else-if="!typeLesson.indexOf('Практическое')" class="type-lesson practice white--text">
            Практ. зан.
        </span>
        <span v-else-if="!typeLesson.indexOf('Лабораторное')" class="type-lesson lab white--text">
            Лаб. зан.
        </span>
        <span v-else-if="!typeLesson.indexOf('Семинар')" class="type-lesson seminar white--text">
            Сем. зан.
        </span>
        <span v-else-if="!typeLesson.indexOf('Зачет')" class="type-lesson offset white--text">
            Зачет
        </span>
        <span v-else-if="!typeLesson.indexOf('Экзамен')" class="type-lesson exam white--text">
            Экзамен
        </span>
        <span v-else-if="!typeLesson.indexOf('Консультация')" class="type-lesson consultation white--text">
            Консультация
        </span>
        <span v-else class="type-lesson other white--text">
            {{typeLesson}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "TypeLesson",
        props: {
            typeLesson: String
        }
    }
</script>

<style scoped>
    .type-lesson {
        border-radius: 20px;
        padding: 5px 10px;
    }
    .lecture {
        background: #50c868;
    }
    .practice {
        background: #fc9501;
    }
    .lab {
        background: #2ea8bf;
    }
    .seminar {
        background: #4f95f4;
    }
    .offset {
        background: #FF4E02;
    }
    .exam {
        background: #F80248;
    }
    .consultation {
        background: #888;
    }
    .other{
        background: #dadada;
    }
</style>
