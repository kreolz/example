import axios from "../../plugins/axios";
import ErrorServices from "../ErrorServices";

async function getIsLocked(nameSection) {
    let response = ''
    try {
        switch (nameSection) {
            case 'education': response =  await axios.get('api/v1/enrollee/education/islocked')
                break;
            case 'main': return await  axios.get('api/v1/enrollee/base/islocked')
            default: throw Error('Not section')
        }
        return response.data.value
    }catch (e) {
        ErrorServices.apiError(e)
    }
}

async function setConfirmed(nameSection) {
    try {
        switch (nameSection) {
            case 'education': await axios.get('api/v1/enrollee/education/sendtoconfirmation')
                break;
            default: throw Error('Not section')
        }
    }catch (e) {
        ErrorServices.apiError(e)
    }
}

async function sendAllToConfirmation() {
    try {
        return axios.post('api/v1/enrollee/account/sendtoconfirmation')
    }catch (e) {
        throw e
    }
}

export default {
    getIsLocked,
    setConfirmed,
    sendAllToConfirmation
}
