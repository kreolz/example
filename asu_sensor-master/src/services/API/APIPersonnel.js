/**
 *      Сервис для работы с api personnel
 *      @author Kostenko V.V.
 */
import axios from '../../plugins/axios';
/**
 *          Вернет данные работника по его peopleID
 * @param peopleId
 * @returns {Promise<void>}
 */
async function getInfoPersonnel(peopleId) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.get('/api/v1/personnel/Physical/people/'+peopleId)
    }catch (e) {
        throw e
    }
}

export default {
    getInfoPersonnel
}
