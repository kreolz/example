import axios from '../plugins/axios'

 async function registrationUser(user, passport, isOfferAccept){
    try {
        return axios.post('api/v1/enrollee/account/register', {
            Email: user.Email,
            LastName: user.LastName,
            FirstName: user.FirstName,
            Patronymic: user.Patronymic,
            Birthday: user.BirthDay,
            genderId: user.genderId,
            IsOfferAccept: isOfferAccept,
            PassportSeries: passport.serial,
            PassportNumber: passport.number,
            PassportType: passport.type
        })
    }catch (e) {
        throw e
    }
}

export  default {
     registrationUser
}
