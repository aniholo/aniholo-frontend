import api from './api'

export default {

    userLogin(id, passwd, accessPeriod=null, refreshPeriod=null) {
        return api().post('/auth/login', {
            data: {
                user_id: id,
                password: passwd,
                access_duration: accessPeriod,
                refresh_duration: refreshPeriod
            }
        })
    },
    refreshToken(id, refreshToken, accessPeriod=null) {
        return api().post('/auth/refresh', {
            data: {
                user_id: id,
                refresh_token: refreshToken,
                acess_duration: accessPeriod
            }
        })
    },
    createUser(id, email, passwd, name) {
        return api().post('/auth/register', {
            data: {
                user_id: id,
                email: email,
                password: passwd,
                username: name
            }
        })
    },
    resetSession(id, accessToken) {
        return api().post('/auth/register', {
            data: {
                user_id: id,
                access_token: accessToken
            }
        })
    },
    setRole(id, accessToken, role) {
        return api().post('/auth/change_role', {
            data: {
                user_id: id,
                access_token: accessToken,
                new_role: role
            }
        })
    },
    changePassword(accessToken, oldPasswd, newPasswd) {
        return api().post('/auth/change_password', {
            data: {
                access_token: accessToken,
                old_password: oldPasswd,
                new_password: newPasswd
            }
        })
    },
    editProfile(acessToken, username=null, email=null) {
        return api().post('/user/edit', {
            data: {
                acess_token: accessToken,
                new_username: username,
                new_email: email
            }
        })
    },
}