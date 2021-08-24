/**
 *          Сервис обработки ошибок. Позволяет в едином месте обрабатывать ошибки и писать различные логи и управлять
 *      состоянием приложения (блокировка приложения для пользоватлей и его информирование о возникших ошибках с его
 *      учетной записью)
 *      @author Костенко В.В.
 */
import store from '../store/index'
/**
 *          Обрабатывает ошибки при запросах к API
 * @author Kostenko V.V.
 * @param response  ответ API
 */
function apiError(response) {
    switch (response.status) {
        case 400:
            store.dispatch('error/set_error', {code:'400', text:"Ошибка в заполнении данных", help:'Обратитесь в ОТиПО'});
            break;
        case 401:
            store.dispatch('error/set_error', {code:'401', text:"У вас не хватает прав для доступа!", help:'Попробуйте авторизироваться'});
            break;
        case 403:
            store.dispatch('error/set_error', {code:'403', text:'У вас не хватает прав для доступа!', help:'Попробуйте чуть позже'});
            break;
        case 404:
            store.dispatch('error/set_error', {code:'404', text:'Некоторые данные не были найдены.', help:'Обратитесь в ОТиПО'});
            break;
        case 415:
            store.dispatch('error/set_error', {code:'415', text:'Загружаемые файлы не поддерживаются', help:'Обратитесь в ОТиПО'});
            break;
        case 500:
            store.dispatch('error/set_error', {code:'415', text:'Произошла ошибка. Попробуйте чуть позже.', help:'Обратитесь в ОТиПО'});
            break;
        default:
            store.dispatch('error/set_error', {code:'500', text:'Произошла непредвиденная ошибка. Попробуйте чуть позже.', help:'Обратитесь в ОТиПО'});
    }
}


/**
 *          Обрабатывает ошибки при обработке данных пришедших при успешном запросе к API
 * @author Kostenko V.V.
 * @param error
 */
function dataError(error) {

}

function extendError(error) {

}
export default {
    apiError,
    extendError
}
