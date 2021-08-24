
export default {
        SAVE_CONSULTATIONS(state, consultations){
            state.consultations = consultations
        },
        /**
         * @param loading   true or false
         */
        LOADING_CONSULTATIONS(state, loading){
            state.loadingConsultations = loading
        },
        LOADING_RETAKES(state, loading){
            state.loadingRetakes = loading
        },
        SAVE_RETAKES(state, retakes){
            state.retakes = retakes
        },
        LOADING_SUBJECT_COMMISSIONS(state, loading){
            state.loadingSubjectCommissions = loading
        },
        SAVE_SUBJECT_COMMISSIONS(state, subjectCommissions){
            state.subjectCommissions = subjectCommissions
        }
}
