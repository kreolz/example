/**
 *          Сервис для работы с аккаунтами пользователей (учетными записями)
 *          @author Kostenko V.
 */


import axios from '../../plugins/axios'

/**
 *          Изменит пароль на введенный пользоватлем
 * @param newPassword
 * @returns
 */

async function changePassword() {
    // eslint-disable-next-line no-empty,no-useless-catch
    try{

    }catch (e) {
        throw e
    }
}

/**
 *          Сбросит пароль на дефолтный - 111111
 * @returns
 */
async function resetPassword() {
    // eslint-disable-next-line no-empty,no-useless-catch
    try{

    }catch (e) {
        throw e
    }
}

/**
 *          У одного человека может быть несколько аккаунтов (к примеру студент работает, или Анисимов, Овсяникова)
 * @param peopleId
 * @returns
 */
async function getListAccount(peopleId) {
    // eslint-disable-next-line no-empty,no-useless-catch
        try {
            return await axios.get('/api/v1/account/Account/accounts/'+peopleId)
        }catch (e) {
            throw e
        }
}

/**
 *          Получит роль аккуанта
 * @param account   сам логин пользователя
 * @returns {Promise<void>}
 */
async function getRoleAccount(account) {
    // eslint-disable-next-line no-empty,no-useless-catch
    try {
        await  axios.get('/api/v1/account/Account/role/'+account)
    }catch (e) {
        throw e
    }
}

/**
 *          Информация о блокировке аккаунта
 * @param account           сам логин пользователя
 * @returns {Promise<void>}
 */
async function getInfoDisabled(account) {
    // eslint-disable-next-line no-empty,no-useless-catch
        try{
            return await axios.get('/api/v1/account/Account/isdisabled/'+account)
        }catch (e) {
            throw e
        }
}
export default {
    changePassword,
    resetPassword,
    getListAccount,
    getRoleAccount,
    getInfoDisabled
}
