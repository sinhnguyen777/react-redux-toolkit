import api from './config'

const users = 'users'

const userApi = {
    getAll: async () => {
        return await api.get(users)
    }
}

export default userApi;