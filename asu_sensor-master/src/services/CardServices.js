/**
 *  Весь сервис будет заключаться только считывании
 * весь остальной функционал переложен на состояние
 *      @author Костенко В.В.
 */
import store from '../store'

/**
 *      Функция привязывается колбэком в C# функцию,
 *     которая вызывается при считывании карты.
 *      @param numberCard  id человека в СКУД
 */
async function setNumberCard(numberCard) {
    let validNumberCard = validateNumberCard(numberCard)
    try{
        await store.dispatch('userPage/set_number_card', validNumberCard)
    }catch (e) {
        console.log(e)
        throw e
    }
}

function validateNumberCard(numberCard){
    return numberCard.length!=10 ? '0'.repeat(10-numberCard.length)+numberCard: numberCard

}

export default {
    setNumberCard
}
