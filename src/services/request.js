import api from './api'

export default {
    getuser () {
        return api().get('user/')
    },
    getPost () {
        return api().get('post')
    },
    getComment () {
        return api().get('comment/')
    },
    getauth () {
        return api().get('auth/')
    }
}
