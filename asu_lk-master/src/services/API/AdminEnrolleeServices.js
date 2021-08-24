import axios from '../../plugins/axios'

async function getEnrolleeList() {
    try {
        return axios.get('api/v1/enrollee/admin/enrollee')
    }catch (e) {
        throw e
    }
}

async function transferEnrollee(userId) {
    try {
        return axios.post('api/v1/enrollee/admin/transfer/'+userId)
    }catch (e) {
        throw e
    }
}

async  function unlock(userId) {
    try {
        return axios.post('api/v1/enrollee/admin/enrollee/unlockediting/'+userId)
    }catch (e) {
        throw e
    }
}
 async  function confirmediting(userId) {
    try {
        return axios.post('api/v1/enrollee/admin/enrollee/confirmediting/'+userId)
    }catch (e) {
        throw e
    }
 }

 async function deleteEnrollee(userId) {
     try {
         return axios.delete('/api/v1/enrollee/admin/enrollee/'+userId)
     }catch (e) {
         throw e
     }
 }

export default {
    getEnrolleeList,
    transferEnrollee,
    unlock,
    confirmediting,
    deleteEnrollee
}
