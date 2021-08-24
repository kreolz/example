<template>
  <v-navigation-drawer
          id="core-navigation-drawer"
          v-model="drawer"
          :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
          :expand-on-hover="expandOnHover"
          :right="$vuetify.rtl"
          src="../../../../assets/fon.png"
          mobile-break-point="960"
          disable-resize-watcher
          app
          mini-variant-width="80"
          :mini-variant="miniVar"
          width="260"
          v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="display-1"
            v-text="profile.title"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>


  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      miniVar: false,
      items: [
        {
          title: 'Анкета',
          icon: 'mdi-format-font',
          to: '/enrollee/profile',
        },
        {
          title: 'Заявления',
          icon: 'mdi-file',
          to: '/enrollee/claim',
        },
        {
          title: 'Рейтинг',
          icon: 'mdi-finance',
          to: '/enrollee/progress',
        },
        {
          title: 'Вступительные испытания',
          icon: 'mdi-head-question',
          to: '/enrollee/test',
        },
        {
          title: 'Оплата',
          icon: 'mdi-currency-rub',
          to: '/enrollee/payment',
        },
        {
          title: 'Выход',
          icon: 'mdi-exit-to-app',
          to: '/logout',
        },
      ],
    }),

    computed: {
      ...mapState('app', {
        barImage: 'barImage',
        barColor: 'barColor',
        drawerF: 'drawer'
      }),
        ...mapGetters('enrollee',{
            shortName: 'GET_SHORT_NAME'
        }),
        ...mapState('enrollee',{
           lastNameUser: 'main.lastName',
            firstNameUser: 'main.firstName'
        }),
      drawer: {
        get () {
          return this.drawerF
        },
        set (val) {
          this.SET_DRAWER(val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.shortName,
        }
      },
    },

    methods: {
      ...mapMutations('app', {
        SET_DRAWER: 'SET_DRAWER'
      }),
      ...mapActions('enrollee',{
        getMainInfo: 'get_main_info'
      }),
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
    mounted() {
      this.getMainInfo()
    }
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
