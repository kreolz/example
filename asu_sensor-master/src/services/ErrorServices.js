/**
 *    Сервис по оповещению пользователя о ошибках в работе приложения
 * @author Костенко В.В.
 */

import NotificationServices from '@/services/NotificationServices'
import router from '@/router'

/**
 *      Извлекет текстовое описание ошибки, для отображения его пользователю.
 * @param error Объект ошибки
 */
function errorExtended (error) {
    let errorText = ''
    errorText += error.data?.title ? '<h3><strong>' + error.data.title + '</strong></h3></br>' : ''
    if (typeof error.data?.errors === 'object' && !Array.isArray(error.data?.errors)) {
        for (const [key, value] of Object.entries(error.data?.errors)) {
            errorText += `${key} : ${value} </br>`
        }
    } else if (Array.isArray(error.data?.errors)) {
        for (const value of error.data?.errors.values()) {
            errorText += `${value} </br>`
        }
    } else {
        errorText += 'Произошла ошибка'
    }
    return errorText
}

/**
 *    Отобразить пользователю текст ошибки
 *  @param errorText  текст ошибки который следует показать пользователю
 */
function errorShow (errorText) {
    NotificationServices.error(errorText)
}

/**
 *  Вызовет нужный колбэк взависимости от статуса ошибки
 * @param error
 */
function errorStatus (error) {
    switch (error.status) {
        case '401' : setInterval(() => {
            router.push({ path: '/' })
        }, 2000)
    }
}

/**
 *    Общий обработчик ошибок для всего приложения
 * @param error  объект ошибки
 */
function errorHandler (error) {
    errorStatus(error)
    const textError = errorExtended(error)
    errorShow(textError)
}

export default {
    errorHandler,
}
