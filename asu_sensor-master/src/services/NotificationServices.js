/**
*  Сервис оповещений пользователя, с использованием всплывающих уведомлений (toast-notification)
 *  @author Костенко В.В.
*/
import Vue from 'vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


Vue.use(Toast, {
    position: 'top-right',
})

/**
 *      Оповещение об ошибке
 * @param text
 * @param config
 */
function error (text, config) {
    Vue.$toast.error(text, config)
}

/**
 *      Оповещение о предупреждении
 * @param textWarning
 * @param config
 */
function warning (textWarning, config) {
    Vue.$toast.warning(textWarning, config)
}

/**
 *      Оповещение с информированием пользователя
 * @param textInfo
 * @param config
 */
function info (textInfo, config) {
    Vue.$toast.info(textInfo, config)
}

/**
 *      Оповещение об успешно выполненой операции
 * @param text
 * @param config
 */
function success (text, config) {
    Vue.$toast.success(text, config)
}

/**
 *      Опопвещение с сообщением для пользователя
 * @param textMessage
 * @param config
 */
function message (textMessage, config) {
    Vue.$toast.default(textMessage, config)
}

export default {
    error,
    warning,
    info,
    success,
    message,
}
