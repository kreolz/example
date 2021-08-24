/**
 *          Реализует все запросы к API  по работе с информацией по студенту
 *          @author Kostenko V.
 */
import axios from "../../plugins/axios";
/**
 *          Вернет все сущности студентов (один человек может обучаться на нескольких направлениях)
 * @param peopleId      уникальный идентификатор человека
 * @returns
 */
async function getInfoStudyOnPeopleId(peopleId) {
    // eslint-disable-next-line no-useless-catch
    try{
        return  await  axios.get('/api/v1//student/Student/students/'+peopleId)
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет единичную сущность студента (для выбранного направления)
 * @param idStudents  идентификатор сущности студента у человека
 * @returns
 */
//Получить базовую информацию о студенте по идентификатору студента (один студент)
async function getInfoStudyOnStudentId(idStudent) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.get(`/api/v1//student/Student/baseinfo/${idStudent}`)
    }catch (e) {
        throw e
    }

}

async function getStudyProgressStudent(idStudent) {
    // eslint-disable-next-line no-useless-catch
    try{
        return  await axios.get(`/api/v1/student/Performance/performance/${idStudent}`)
    }catch (e) {
        throw e
    }
}

export default {
    getInfoStudyOnStudentId,
    getInfoStudyOnPeopleId,
    getStudyProgressStudent
}
