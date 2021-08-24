import axios from '@/plugins/axios'
async function getNews(page) {
    return await axios.get(`/api/v1/catalog/news/${page}`)
}

export default {
    getNews
}
