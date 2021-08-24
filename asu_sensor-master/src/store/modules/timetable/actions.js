import APITimeTableServices from "@/services/API/APITimeTableServices";
import APIExtractionDataServices from "@/services/API/APIExtractionDataServices";
import NotificationServices from "@/services/NotificationServices";

export default {
        async get_consultations({commit}){
            commit('LOADING_CONSULTATIONS', true)
            let consultations = await APITimeTableServices.getConsultations()
            consultations = APIExtractionDataServices.extract(consultations).map(consultation => {
                return {
                    ...consultation,
                    fullName: `${consultation.teacher.lastName} ${consultation.teacher.firstName}  ${consultation.teacher.patronymic}`,
                    beginTime: new Date(consultation.ringingTime.startTime).toLocaleTimeString('ru-RU', {hour: "numeric", minute: 'numeric'}),
                    endTime: new Date(consultation.ringingTime.endTime).toLocaleTimeString('ru-RU', {hour: "numeric", minute: 'numeric'}),
                    date: new Date(consultation.date).toLocaleDateString('ru-RU')
                }
            })
            commit('SAVE_CONSULTATIONS', consultations)
            commit('LOADING_CONSULTATIONS', false)
            NotificationServices.info('Список консультаций обновлен')
        },
        async get_retakes({commit}){
            commit('LOADING_RETAKES', true)
            let retakes = await APITimeTableServices.getRetakes()
            retakes = APIExtractionDataServices.extract(retakes).map(retake =>{
                return {
                    ...retake,
                    fullName: `${retake.teacher.lastName} ${retake.teacher.firstName} ${retake.teacher.patronymic}`,
                    beginTime: new Date(retake.ringingTime.startTime).toLocaleTimeString('ru-RU', {hour: "numeric", minute: 'numeric'}),
                    endTime: new Date(retake.ringingTime.endTime).toLocaleTimeString('ru-RU', {hour: "numeric", minute: 'numeric'}),
                    date: new Date(retake.date).toLocaleDateString('ru-RU')
                }
            })
            commit('SAVE_RETAKES', retakes)
            commit('LOADING_RETAKES', false)
            NotificationServices.info('Список пересдач обновлен')
        },
        async get_subject_commissions({commit}){
            commit('LOADING_SUBJECT_COMMISSIONS', true)
            let subjectCommissions = await APITimeTableServices.getSubjectCommissions()
            subjectCommissions = APIExtractionDataServices.extract(subjectCommissions)
            commit('SAVE_SUBJECT_COMMISSIONS', subjectCommissions)
            commit('LOADING_SUBJECT_COMMISSIONS', false)
            NotificationServices.info('Список предметных комисcий обновлен')
        }
}
