<template>
    <button
        class="base-button"
        :style="customStyle"
        v-on="$listeners"
        v-bind="$attrs"
    >
      <div>
        <v-icon
            :size="iconSize"
            :color="iconColor"
        >
          {{icon}}
        </v-icon>
      </div>
      <div>
        {{ title}}
      </div>
    </button>
</template>

<script>
/**
 *  Базовый вариант панели для отображения избираемой информации.
 */
export default {
  name: "BaseTouchePanel",
  props:{
    title: {String,Number},
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.87)',
    },
    titleSize: {
      type: String,
      default: '1em',
    },
    to: String,
    height: {
      type: String,
      default: '100px',
    },
    width: {
      type: String,
      default: '100px',
    },
    icon: String,
    iconSize: String,
    iconColor: String,
    backgroundColor:{
      type: String,
      default: '#fff',
    }
  },
  computed:{
    customStyle(){
      return `width: ${this.width}; height: ${this.height}; font-size: ${this.titleSize}; color: ${this.titleColor}`
    }
  }
}
</script>

<style scoped>
.base-button{
  border-radius: 10px;
  box-shadow: 0 0 10px #d9d9d9;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
}
.base-button.active::after{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 45px;
  content: '';
  border-radius: 50px 0 10px 0;
  animation: animationActiveCourse .3s ease-in-out;
}
.base-button.active.active-red::after{
  border-radius: 50px 0 10px 0;
  background: rgb(255,82,82);
  background: linear-gradient(45deg, rgba(255,82,82,1) 0%, rgba(242,31,2,0.8) 100%);
}
.base-button.active.active-blue::after{
  background: rgb(57, 137, 210);
  background: linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(3,153,238,1) 80%);
  background: -webkit-linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(3,153,238,1) 80%);
}
@keyframes animationActiveCourse {
  from{
    width: 10px;
    height: 10px;
  }
  20%{
    width: 20px;
    height: 20px;
  }
  40%{
    width: 40px;
    height: 40px;
  }
  60%{
    width: 60px;
    height: 60px;
  }
  80%{
    width: 55px;
    height: 55px;
  }
  to{
    width: 45px;
    height: 45px;
  }
}
</style>
