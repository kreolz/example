<template>
    <v-container>
        <v-row>
            <v-col>
                <v-select
                    :items="privileges"
                    item-value="id"
                    item-text="value"
                    clearable
                    v-model="privilege"
                    @change="set_privilege"
                    label="Выберите льготу"
                />
            </v-col>
        </v-row>
        <v-row align="end">
            <v-col cols="6">
                <v-btn @click="deletePrivilege">
                    Удалить льготу
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-file-input
                        accept="image/*"
                        chips
                        multiple
                        show-size
                        type="file"
                        id="filesPrivilege"
                        ref="filesPrivilege"
                        @change="handleFilesPrivilegeUpload"
                        label="Копии документов подтверждающих льготу"
                />
                <v-btn @click="set_privilege_files(filesPrivilege)">
                    Сохранить
                </v-btn>
                <v-list>
                    <v-list-item v-for="file in privilegeFiles" :key="file.fileName">
                        <v-list-item-action>
                            <v-btn
                                    icon
                                    @click="delete_privilege_file(file.fileName)"
                            >
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                            {{file.userFileName}}
                        </v-list-item-content>
                        <v-list-item-avatar>
                            <v-img :src="'https://api2.rb.asu.ru/api/v1/enrollee/lgota/files/'+file.fileName"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-action>
                            <view-file :url="'https://api2.rb.asu.ru/api/v1/enrollee/lgota/files/'+file.fileName" />
                        </v-list-item-action>
                    </v-list-item>

                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import { mapFields} from 'vuex-map-fields'
    import ViewFile from "./CopyDocument/ViewFile";
    export default {
        name: "EnrolleeProfilePrivilege",
        components: {ViewFile},
        data(){
          return {
              filesPrivilege: ''
          }
        },
        computed:{
            ...mapState('catalog', {
                privileges: 'privileges'
            }),
            ...mapState('enrollee', {
                privilegeFiles: 'privilegeFiles'
            }),
            ...mapFields('enrollee', {
                privilege: 'privilege.lgotaId'
            })
        },
        methods:{
            ...mapActions({
                get_privileges: 'catalog/get_privileges',
                get_privilege: 'enrollee/get_privilege',
                set_privilege: 'enrollee/set_privilege',
                deletePrivilege: 'enrollee/delete_privilege',
                set_privilege_files: 'enrollee/set_privilege_files',
                get_privilege_files: 'enrollee/get_privilege_files',
                delete_privilege_file: 'enrollee/delete_privilege_file'
            }),
            handleFilesPrivilegeUpload(files){
                let formData = new FormData()
                for( let i = 0; i < files.length; i++ ){
                    let file = files[i]
                    formData.append('files', file)
                }
                this.filesPrivilege = formData
            }
        },
        mounted() {
            this.get_privileges()
            this.get_privilege()
            this.get_privilege_files()
        }
    }
</script>

<style scoped>

</style>
