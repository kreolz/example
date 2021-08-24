import axios from '@/plugins/axios'

async function getChairs(){
    return await axios.get(`/api/v1/catalog/chairs`)
}
async function getGroups(){
    return await axios.get(`/api/v1/catalog/groups`)
}

async function getGroupsWithListeners(){
    return await axios.get(`/api/v1/catalog/groups/listeners`)
}

async function getGroupsWithCourses(){
    return await axios.get(`/api/v1/catalog/groups/courses`)
}

async function getGroupsWithCoursesAndListeners(){
    return await axios.get(`/api/v1/catalog/groups/courses/listeners`)
}

async function getRooms(){
    return await axios.get(`/api/v1/catalog/rooms`)
}
async function getTeachers(){
    return await axios.get(`/api/v1/catalog/teachers`)
}

async function getTeacherForTimeTable(){
    return await axios.get('/api/v1/catalog/teachers/timetable')
}

export default {
    getChairs,
    getGroups,
    getGroupsWithListeners,
    getGroupsWithCourses,
    getGroupsWithCoursesAndListeners,
    getRooms,
    getTeachers,
    getTeacherForTimeTable
}
