/** Сервис для запросов данных с расписанием
 *  @author Kostenko V.
 */
import axios from '@/plugins/axios'
//import moment from '../../plugins/moment'

/**
 *              Универсальный метод для запроса расписания
 * @param typeTimeTable     Group || Student || Teacher || Room
 * @param timePeriod        Day || Week || Month
 * @param valueTimeTable    IDGroup || IDStudent || IDTeacher || IDRoom
 * @param date
 * @param fullData
 *
 */
async function getTimeTable({typeTimeTable,timePeriod, valueTimeTable, date= new Date().toLocaleDateString('ru-RU'), fullData=false }) {
    let requestURL = '/api/v1/timetable/';
    switch (typeTimeTable) {
        case 'Group' : requestURL+= 'group/';
            break;
        case 'Student' : requestURL+= 'student/';
            break;
        case 'Teacher' : requestURL+= 'teacher/';
            break;
        case 'Room' : requestURL+= 'room/';
            break;
        default :
            throw 'Неверный параметр типа расписания';
    }
    switch (timePeriod) {
        case 'Day': requestURL+= 'day/';
            break;
        case 'Week' : requestURL+='week/';
            break;
        case 'Month' : requestURL+='month/';
            break;
        default :
            throw 'Неверный параметр периода расписания';
    }

    requestURL+=valueTimeTable+'/';

    if(date){
        requestURL+=date+'/'
    }else{
        // let dateTT = new Date();
        // requestURL+= moment(dateTT).format("yyyy.MM.dd") + '/';
    }
    if(fullData) //requestURL+= 'full';
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.get(requestURL)
    }catch (e) {
        throw e
    }
}

/**
 *          Запрос расписания для группы на день для переданой даты
 * @param idGroup
 * @param date
 * @param full
 */
async function getTimeTableGroupDay({ idGroup, date, full}) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Group', timePeriod:'Day', valueTimeTable: idGroup, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Запрос расписания для группы на неделю от переданой даты
 * @param idGroup
 * @param date
 * @param full
 */
async function getTimeTableGroupWeek(idGroup, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Group', timePeriod:'Week', valueTimeTable: idGroup, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Запрос расписания для группы на месяц от переданой даты
 * @param idGroup
 * @param date
 * @param full
 */
async function getTimeTableGroupMonth(idGroup, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Group', timePeriod:'Month', valueTimeTable: idGroup, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Запрос расписания для студента на день для переданной даты
 * @param idStudent
 * @param date
 * @param full
 */
async function getTimeTableStudentDay(idStudent, date, full){
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Student', timePeriod:'Day', valueTimeTable: idStudent, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Запрос расписания для студента на неделю от переданной даты
 * @param idStudent
 * @param date
 * @param full
 */
async function getTimeTableStudentWeek(idStudent, date, full){
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Student', timePeriod:'Week', valueTimeTable: idStudent, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Запрос расписания для студента на месяц от переданной даты
 * @param idStudent
 * @param date
 * @param full
 */
async function getTimeTableStudentMonth(idStudent, date, full){
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Student', timePeriod:'Month', valueTimeTable: idStudent, date:date, fullData: full})
    }catch (e) {
        throw e
    }

}

// методы для запроса расписания преподавателя
/**
 *          Вернет список занятий для преподавателя на один день (date)
 * @param idTeacher
 * @param date
 * @param full
 */
async function getTimeTableTeacherDay(idTeacher, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Teacher', timePeriod:'Day', valueTimeTable: idTeacher, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет список занятий для переподавателя на 7 дней от date
 * @param idTeacher
 * @param date
 * @param full
 */
async function getTimeTableTeacherWeek(idTeacher, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Teacher', timePeriod:'Week', valueTimeTable: idTeacher, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет список занятий для преподавателя на 30 дней от date
 * @param idTeacher
 * @param date
 * @param full
 */
async function getTimeTableTeacherMonth(idTeacher, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Teacher', timePeriod:'Month', valueTimeTable: idTeacher, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет расписание занятий для аудитории на день для переданной даты
 * @param idRoom
 * @param date
 * @param full
 */
async function getTimeTableRoomDay(idRoom, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Room', timePeriod:'Day', valueTimeTable: idRoom, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет расписание занятий для аудитории на неделю от переданной даты
 * @param idRoom
 * @param date
 * @param full
 */
async function getTimeTableRoomWeek(idRoom, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Room', timePeriod:'Week', valueTimeTable: idRoom, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет расапиние занятий для аудитории на месяц от переданной даты
 * @param idRoom
 * @param date
 * @param full
 */
async function getTimeTableRoomMonth(idRoom, date, full) {
    // eslint-disable-next-line no-useless-catch
    try{
        return await getTimeTable({typeTimeTable:'Room', timePeriod:'Month', valueTimeTable: idRoom, date:date, fullData: full})
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет список активных(не прошедших) консультаций на момент запроса
 *
 */
async function getConsultations() {
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.get('api/v1/timetable/consultations')
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет список активных(не прошедших) пересдач на момент запроса
 *
 */
async  function getRetakes() {
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.get('/api/v1/timetable/retakes')
    }catch (e) {
        throw e
    }
}

/**
 *          Вернет возможные виды расписаний звонков (начал и конец лекций)
 * @returns {Promise<AxiosResponse<any>>}
 */
async function getRingingtimes() {
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.get('/timetable/ringingtimes')
    }catch (e) {
        throw e
    }
}

async function getSubjectCommissions(){
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.get('/api/v1/timetable/subjectcomissions')
    }catch (e) {
        throw e
    }
}
export default {
    getTimeTable,
    getTimeTableGroupDay,
    getTimeTableGroupWeek,
    getTimeTableGroupMonth,
    getTimeTableRoomDay,
    getTimeTableRoomWeek,
    getTimeTableRoomMonth,
    getTimeTableTeacherDay,
    getTimeTableTeacherWeek,
    getTimeTableTeacherMonth,
    getTimeTableStudentDay,
    getTimeTableStudentWeek,
    getTimeTableStudentMonth,
    getConsultations,
    getRetakes,
    getRingingtimes,
    getSubjectCommissions,
}
