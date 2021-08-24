/**
 *          Реализует все запросы к API  по работе с картой СКУД
 *          @author Kostenko V.
 */

import axios from "../../plugins/axios";
/**
 *      Уникальная информация хранимая в СКУД для указанного номера карты
 * @param numberCard
 * @returns {Promise<void>}
 */
async function getInfoCard(numberCard) {
    // eslint-disable-next-line no-useless-catch
    try{
         return  await axios.get('/api/v1/pacs/Card/cards/'+numberCard)
    }catch (e) {
        throw  e
    }
}
export default {
    getInfoCard
}
