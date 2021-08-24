<template>
    <v-app>
        <v-container>
            <v-row
                    justify="center"
                    align="center"
                    style="height: 90vh;"
            >
                <v-col
                        cols="12"
                        sm="10"
                        md="8"
                        lg="4"
                        xl="3"
                >
                    <material-card
                            color="primary"
                    >
                        <template v-slot:heading>
                            <div class="display-2">
                                Личный кабинет
                            </div>
                            <div class="subtitle-1">
                                Абитуриента Рубцовского института (филиала) АлтГУ
                            </div>
                        </template>
                        <v-form>
                            <v-container>
                                <v-row
                                        dense
                                >
                                    <v-col>
                                        Если у вас нет логина и пароля, то вам следует
                                        <router-link to="/registration">зарегистрироваться.</router-link>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                                v-model="email"
                                                label="Email"
                                                autocomplete="username"
                                                prepend-inner-icon="mdi-account"
                                        />
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                                v-model="password"
                                                type="password"
                                                autocomplete="current-password"
                                                label="Пароль"
                                                prepend-inner-icon="mdi-key"
                                        />
                                    </v-col>
                                    <v-col cols="12">
                                        <v-btn
                                                color="primary"
                                                block
                                                @click="login()"
                                        >
                                            Войти
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                        <v-container>
                            <v-row dense>
                                <v-col>
                                    <v-subheader
                                            class="display-1"
                                            style="cursor: pointer"
                                            @click="sidebarResetPassword=!sidebarResetPassword"
                                    >
                                        Забыли пароль?
                                    </v-subheader>
                                </v-col>
                            </v-row>
                        </v-container>
                    </material-card>
                </v-col>
            </v-row>
        </v-container>
        <v-navigation-drawer
                v-model="sidebarResetPassword"
                app
                temporary
                width="350"
        >
            <v-container>
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col cols="12">
                        <h3 class="display-2">Сброс пароля</h3>
                        Если вы забыли пароль, то введите свою электронную почту с помощью которой
                        вы регистрировались в личном кабинете и мы вышлем вам ссылку для сброса пароля.
                        <v-text-field
                                v-model="emailForgot"
                                type="email"
                                label="Email"
                        />
                        <v-btn
                                color="primary"
                                @click="forgotPassword"
                                block
                        >
                            Отправить
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>

        </v-navigation-drawer>
    </v-app>
</template>

<script>
    import MaterialCard from "@/components/base/MaterialCard";
    export default {
        name: "Login",
        components: {MaterialCard},
        data() {
            return {
                email: '',
                password: '',
                sidebarResetPassword: false,
                emailForgot: '',
            }
        },
        methods:{
            login(){
                this.$store.dispatch('authorization/login',{login:this.email, password:this.password})
            },
            forgotPassword(){
                this.$store.dispatch('authorization/forgot_password', this.emailForgot)
            }
        }
    }
</script>

<style scoped>

</style>
