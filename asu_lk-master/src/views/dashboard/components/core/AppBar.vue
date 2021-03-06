<template>
  <v-app-bar
    id="app-bar"
    fixed
    app
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />
    <v-menu>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-on="{ ...tooltip, ...menu }"
            >
              <v-icon>
                mdi-eye
              </v-icon>
            </v-btn>
          </template>
          <span>Версия для слабовидящих</span>
        </v-tooltip>
      </template>
      <dashboard-core-settings />
    </v-menu>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-on="{ ...tooltip, ...menu }"
            >
              <v-icon>
                mdi-help
              </v-icon>
            </v-btn>
          </template>
          <span>Справка</span>
        </v-tooltip>
      </template>
      <v-card>
        <v-card-text>
          <help />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'
  import DashboardCoreSettings from "./Settings";
  import help from '../../component/Help'

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      help,
      DashboardCoreSettings,
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      dialog: false,
      notifications: [
        'Ошибка в заполнении данных об образовании!',
        'Вы заполнили Основные данные в анкете',
        'Вы зарегистрировались в системе "Поступай онлайн Рубцовского института"',
      ],
    }),

    computed: {
      ...mapState('app', ['drawer']),
    },

    methods: {
      ...mapMutations('app', {
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
