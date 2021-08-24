<template>
  <div class="keyboard">
    <div class="keys">
      <div class="row-litter" v-for="(row,i) in rowsLitter" :key="i">
        <base-touche-panel
            v-if="i=='rowThree'"
            :icon="registrIcon"
            width="75px"
            height="75px"
            @click="registr=!registr"
            v-show="activeKeyboardItem!=2"
        ></base-touche-panel>
        <base-touche-panel
            v-for="keyCode in row"
            :key="keyCode"
            :title="registr ? keyCode.toLowerCase() :  keyCode.toUpperCase()"
            title-size="1.3em"
            width="75px"
            height="75px"
            @click="addKey(keyCode)"
        >
        </base-touche-panel>
        <v-menu
        >
          <template v-slot:activator="{ on, attrs }">
            <base-touche-panel
                v-if="i=='rowThree'"
                color="primary"
                v-bind="attrs"
                v-on="on"
                icon="mdi-earth"
                width="75px"
                height="75px"
            />
          </template>

          <v-list>
            <v-list-item-group
                v-model="activeKeyboardItem"
                mandatory
            >
              <v-list-item
                  v-for="(languageItem, i) in languages"
                  :key="i"
              >
                <v-list-item-title>{{ languageItem.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="control-button">
      <base-touche-panel
          width="100px"
          height="75px"
          icon="mdi-keyboard-backspace"
          @click="backspace()"
      ></base-touche-panel>
      <base-touche-panel
          width="100px"
          height="75px"
          icon="mdi-delete"
          @click="del()"
      ></base-touche-panel>
      <base-touche-panel
          width="100px"
          height="75px"
          icon="mdi-keyboard-space"
          @click="space()"
      ></base-touche-panel>
    </div>
  </div>
</template>

<script>
import BaseTouchePanel from "@/components/baseComponents/BaseTouchPanel";
export default {
  name: "DefaultKeyboard",
  components: {BaseTouchePanel},
  props:{
    litter: Object
  },
  data() {
    return{
      activeKeyboardItem: 0,
      languageMenuShow: false,
      registr: true, // true low false upper
      text: "",
      languages: [
        {
          id: 1,
          title: 'Абв',
          locale: 'ru-RU',
        },
        {
          id: 2,
          title: 'Abc',
          locale: 'en-USA',
        },
        {
          id: 3,
          title: '1#?',
          locale: 'numeric',
        }
      ],
      rusLitter:{
        rowOne:['й','ц','у','к','е','н','г','ш','щ','з','х', 'ъ'],
        rowTwo:['ф','ы','в','а','п','р','о','л','д','ж','э'],
        rowThree:['я','ч','с','м','и','т','ь','б','ю']
      },
      engLitter:{
        rowOne:['q','w','e','r','t','y','u','i','o','p'],
        rowTwo:['a','s','d','f','g','h','j','k','l'],
        rowThree:['z','x','c','v','b','n','m']
      },
      numberAndChar:{
        rowOne:['1','2','3','4','5','6','7','8','9','0'],
        rowTwo:['@','#','$','_','&','-','+','(',')','/'],
        rowThree:['*','"','\'',':',';','!','?']
      }
    }
  },
  methods:{
    addKey: function(keyCode){
      let litter = this.registr ? keyCode.toLowerCase() :  keyCode.toUpperCase()
      this.text+= litter
      this.$emit('add', litter)
    },
    space: function(){
      this.$emit('space')
    },
    del: function(){
      this.$emit('del')
    },
    backspace: function(){
      this.$emit('backspace')
    }
  },
  computed:{
    rowsLitter(){
      switch (this.activeKeyboardItem){
        case 0:
          return  this.rusLitter
        case 1:
            return this.engLitter
        case 2:
            return this.numberAndChar
        default:
            return  this.rusLitter
      }
    },
    registrIcon(){
      return this.registr ? 'mdi-arrow-up-bold' : 'mdi-arrow-down-bold'
    }
  }
}
</script>

<style lang="sass">
@use "sass:math"
.keyboard
    position: absolute
    bottom: 25px
    left: 130px
    display: grid
    grid-template-columns: 10fr 2fr
    grid-template-rows: 1fr
    width: calc(100% - 130px)
.keys
    width: 100%
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 10px
    justify-content: space-around
    align-items: center
.row-litter
    display: flex
    gap: 10px
    justify-content: space-around
    align-items: stretch
.control-button
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
</style>
