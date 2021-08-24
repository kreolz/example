/**
             Состояние отвечающее за страницу пользователя, которая активируется при помощи карты
             @author Kostenko V.V.
 */
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
