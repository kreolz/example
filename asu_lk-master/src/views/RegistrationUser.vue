<template>
    <v-app>
        <v-container>
            <v-row
                    align="center"
                    justify="center"
                    style="height: 90vh;"
            >
            <v-col
                    cols="12"
                    sm="10"
                    md="8"
                    lg="4"
                    xl="3"
            >
                <material-card color="primary">
                    <template v-slot:heading>
                        <div class="display-2" v-text="$t('registrationTitle')">
                        </div>
                        <div class="subtitle-1">
                            Создание новой учетной записи для подачи документов в приемную комиссию
                        </div>
                    </template>
                    <validation-observer v-slot="{invalid}">
                        <form @submit.prevent="onSubmit">
                            <v-container>
                                <v-row dense>
                                    <v-col cols="12">
                                        <validation-provider
                                                name="E-mail"
                                                rules="required|email"
                                                v-slot="{errors}"
                                        >
                                            <v-text-field
                                                    v-model="Email"
                                                    type="email"
                                                    label="Email"
                                            />
                                            <span>{{ errors[0] }}</span>
                                        </validation-provider>

                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <validation-provider
                                                    rules="required"
                                        >
                                            <v-text-field
                                                    v-model="LastName"
                                                    label="Фамилия"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <validation-provider
                                                        rules="required"
                                        >
                                            <v-text-field
                                                    v-model="FirstName"
                                                    label="Имя"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <validation-provider
                                                        rules="required"
                                        >
                                            <v-text-field
                                                    v-model="Patronymic"
                                                    label="Отчество"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-dialog
                                                ref="dialog"
                                                v-model="modal"
                                                :return-value.sync="date"
                                                width="290px"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                        v-model="BirthDay"
                                                        label="Дата рождения"
                                                        readonly
                                                        v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker v-model="BirthDay">
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="modal = false">Закрыть</v-btn>
                                                <v-btn text color="primary" @click="$refs.dialog.save(date)">Сохранить</v-btn>
                                            </v-date-picker>
                                        </v-dialog>
                                    </v-col>
                                    <v-col cols="12">
                                        <validation-provider
                                                        rules=""
                                        >
                                            <v-select
                                                    v-model="gender"
                                                    :items="genders"
                                                    item-text="value"
                                                    item-value="id"
                                                    label="Пол"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="12">
                                        <validation-provider
                                                    rules="required"
                                        >
                                            <v-select
                                                    v-model="passportType"
                                                    label="Тип документа"
                                                    :items="typeDoc"
                                                    item-value="id"
                                                    item-text="documentType"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col
                                            cols="12"
                                            sm="6">
                                        <validation-provider
                                                        rules="required"
                                        >
                                            <v-text-field
                                                    type="number"
                                                    v-model="passportSerial"
                                                    label="Серия"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <validation-provider
                                                rules="required"
                                        >
                                            <v-text-field
                                                    type="number"
                                                    v-model="passportNumber"
                                                    label="Номер"
                                            />
                                        </validation-provider>
                                    </v-col>
                                    <v-col
                                            cols="12"
                                    >
                                        <validation-provider
                                                            rules="required:true"
                                        >
                                            <v-dialog v-model="dialog" persistent max-width="600">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-chip
                                                            color="primary"
                                                            dark
                                                            v-bind="attrs"
                                                            v-on="on"
                                                    >
                                                        Согласие на обработку персональных данных
                                                    </v-chip>
                                                </template>
                                                <v-card>
                                                    <v-card-title class="headline">Согласие на обработку персональных данных</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify">
                                                            В соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» даю согласие ФГБОУ ВО «Алтайский государственный университет», именуемому в дальнейшем «Оператор», расположенному по адресу: г. Барнаул проспект Ленина 61, на обработку моих персональных данных, а именно: фамилия, имя, отчество, дата и место рождения, пол, состав семьи (ФИО и телефоны родителей), гражданство, паспортные данные, образование (тип образования, наименование учебного заведения, тип учебного заведения, адрес, данные диплома, аттестата, о владении иностранными языками, о социальных льготах, на которые имею право (в том числе по состоянии здоровья), результаты сдачи вступительных испытаний (ЕГЭ, предметы, баллы, экзамены, олимпиады), информация о обучении на факультете довузовской подготовки/подготовительных курсах, о направлениях подготовки (специальностях), указанные в заявлениях, адрес (регистрации, фактический), сведения о льготах (документы, подтверждающие льготы при поступлении в вуз).

                                                        </p>
                                                        <p class="text-justify">
                                                            Разрешаю оператору производить с персональными данными следующие действия: сбор, систематизацию, накопление, хранение, уточнение, использование, предоставление, распространение, обезличивание, удаление, блокирование, уничтожение.

                                                        </p>
                                                        <p class="text-justify">
                                                            Оператор обязуется использовать данные для обеспечения соблюдения правил приема в ФГБОУ ВО «Алтайский государственный университет», федеральных законов и иных нормативных правовых актов Российской Федерации, содействие в оптимальном выборе образовательных программ, функционирования информационных систем обеспечения и мониторинга учебного процесса, научной, организационной и финансово-экономической деятельности университета в соответствии с действующим законодательством Российской Федерации.

                                                        </p>
                                                        <p class="text-justify">
                                                            Я утверждаю, что ознакомлен с документами организации, устанавливающими порядок обработки персональных данных, а также с моими правами и обязанностями в этой области. Согласие вступает в силу со дня его подписания и действует в течении 1 года. Согласие на обработку персональных данных может быть мною отозвано в соответствии с п. 2 ст. 9 ФЗ от 27.07.2006 г. № 152-ФЗ «О персональных данных». В случае отзыва согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия Субъекта персональных данных при наличии оснований, указанных в п. 2-11 части 1 ст. 6, части 2 ст. 10 и части 2 ст. 11 ФЗ от 27.07.2006 г. № 152-ФЗ «О персональных данных».
                                                        </p>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="green darken-1" text @click="dialog = false">Закрыть</v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                            <v-switch
                                                    v-model="isOfferAccept"
                                                    label="Я прочитал и принимаю «Согласие на обработку персональных данных»">
                                            </v-switch>
                                        </validation-provider>
                                    </v-col>
                                    <v-col
                                            align="center"
                                            cols="12"
                                    >
                                        <v-btn
                                                type="submit"
                                                :disabled="!isOfferAccept"
                                                color="primary"
                                        >
                                            Зарегистрироваться
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </form>
                    </validation-observer>
                </material-card>
            </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import MaterialCard from "../components/base/MaterialCard"
    import { mapActions, mapState } from 'vuex'
    import { mapFields} from 'vuex-map-fields'
    export default {
        name: "RegistarationUser",
        components: {MaterialCard},
        data() {
            return {
                date: new Date().toISOString().substr(0, 10),
                modal: false,
                dialog: false,
            }
        },
        computed: {
            ...mapState('catalog',{
                genders: 'genders',
                typeDoc: 'typePassport',
            }),
            ...mapFields('registration', {
                Email: 'user.Email',
                LastName: 'user.LastName',
                FirstName: 'user.FirstName',
                Patronymic: 'user.Patronymic',
                BirthDay: 'user.BirthDay',
                gender: 'user.genderId',
                passportType: 'passport.type',
                passportSerial: 'passport.serial',
                passportNumber: 'passport.number',
                isOfferAccept: 'isOfferAccept',
                resultRegistration: 'resultRegistration',
            })
        },
        methods: {
            ...mapActions({
                onSubmit: 'registration/registration_new_user',
                getGenders: 'catalog/get_genders',
                getTypePassport: 'catalog/get_type_passport'
            }),
            changeLocale(){
                this.$root.$i18n.locale = 'kz'
            }
        },
        mounted() {
            this.getGenders()
            this.getTypePassport()
        }
    }
</script>

<style scoped>

</style>
