<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-subheader>
                    Копия паспорта страницы 2,3 и копия страницы с пропиской
                </v-subheader>
                <v-file-input
                        accept="image/*"
                        chips
                        multiple
                        show-size
                        type="file"
                        id="filesPassport"
                        ref="filesPassport"
                        @change="handleFilesPassportUpload"
                        label="Копия паспорта страницы 2,3 и копия страницы с пропиской"
                    />
                <v-btn
                        color="primary"
                        @click="setFilesPassport(filesPass)"
                >
                    Сохранить файлы
                </v-btn>
                <v-list>
                    <v-list-item v-for="file in filesPassport" :key="file.fileName">
                        <v-list-item-avatar>
                            <v-img :src="'https://api2.rb.asu.ru/api/v1/enrollee/passport/files/'+file.fileName"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            {{file.userFileName}}
                            <a target="_blank" :href="'https://api2.rb.asu.ru/api/v1/enrollee/passport/files/'+file.fileName">Открыть в новой вкладке</a>
                        </v-list-item-content>
                        <v-spacer />
                            <a class="v-btn v-btn--contained v-btn--router theme--light v-size--default green white--text" :href="'https://api2.rb.asu.ru/api/v1/enrollee/passport/files/'+file.fileName">
                                Скачать
                            </a>
                            <view-file :url="'https://api2.rb.asu.ru/api/v1/enrollee/passport/files/'+file.fileName" />
                            <v-btn  color="red"
                                    class="white--text"
                                    @click="deleteFilePassport(file.fileName)"
                            >
                                Удалить
                            </v-btn>
                    </v-list-item>

                </v-list>
            </v-col>
            <v-col cols="12">
                <v-subheader>
                    Копия документа об образовании и вкладыша документа
                </v-subheader>
                <v-file-input
                        accept="image/*"
                        chips
                        multiple
                        show-size
                        id="filesEducation"
                        ref="filesEducation"
                        @change="handleFilesEducationUpload"
                        label=" Копия документа об образовании и вкладыша документа"
                />
                <v-list>
                    <v-list-item v-for="file in filesEducation" :key="file.fileName">
                        <v-list-item-avatar>
                            <v-img :src="'https://api2.rb.asu.ru/api/v1/enrollee/education/files/'+file.fileName"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            {{file.userFileName}}
                        </v-list-item-content>
                        <v-spacer />
                            <a class="v-btn v-btn--contained v-btn--router theme--light v-size--default green white--text" :href="'https://api2.rb.asu.ru/api/v1/enrollee/education/files/'+file.fileName">
                                Скачать
                            </a>
                            <view-file :url="'https://api2.rb.asu.ru/api/v1/enrollee/education/files/'+file.fileName" />
                            <v-btn
                                    color="red"
                                    class="white--text"
                                    @click="deleteFileEducation(file.fileName)"
                            >
                                Удалить
                            </v-btn>
                    </v-list-item>

                </v-list>
                <v-btn
                        color="primary"
                        @click="setFilesEducation(filesEdu)"
                >
                    Сохранить файлы
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapMultiRowFields } from 'vuex-map-fields'
    import ViewFile from "./CopyDocument/ViewFile";
    export default {
        name: "EnrolleeProfileDocuments",
        components: {ViewFile},
        data(){
            return{
                filesPass: [],
                filesEdu: []
            }
        },
        computed:{
          ...mapMultiRowFields('enrollee', {
              filesPassport: 'filesPassport',
              filesEducation: 'filesEducation'
          })
        },
        methods:{
            ...mapActions('enrollee',{
               setFilesPassport: 'set_files_passport',
               getFilesPassport: 'get_files_passport',
               deleteFilePassport: 'delete_file_passport',
                getFilesEducation: 'get_files_education',
                setFilesEducation: 'set_files_education',
                deleteFileEducation: 'delete_file_education'
            }),
            handleFilesPassportUpload(files){
                let formData = new FormData()
                    console.log(files[0])
                for( let i = 0; i < files.length; i++ ){
                    let file = files[i]
                    formData.append('files', file)
                }
                this.filesPass = formData
            },
            handleFilesEducationUpload(files){
                let formData = new FormData()
                for( let i = 0; i < files.length; i++ ){
                    let file = files[i]
                    formData.append('files', file)
                }
                this.filesEdu = formData
            },
        },
        mounted() {
            this.getFilesPassport()
            this.getFilesEducation()
        }

    }
</script>

<style scoped>

</style>
