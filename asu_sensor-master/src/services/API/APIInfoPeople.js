/**
 *          @author Костенко В.В.
 */

import axios from '@/plugins/axios'

/**
 *          Вернет базовую информацию о человеке по уникальному идентификатору человека
 * @param peopleId
 * @returns
 */
async function getInfoPeople(peopleId) {
    // eslint-disable-next-line no-useless-catch
        try{
            return await  axios.get('/api/v1/people/People/baseinfo/'+peopleId)
        }catch (e) {
            throw e
        }
}

/**
 *          Вернет фото человека по уникальному идентификатору человека
 * @param peopleId
 * @returns
 */
async function getPhotoPeople(peopleId) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.get('/api/v1/people/People/photo/'+peopleId)
    }catch (e) {
        throw e
    }
}


export default {
    getPhotoPeople,
    getInfoPeople

}


