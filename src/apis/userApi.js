import api from './config'

const users = 'users'

const userApi = {
    getAll: async () => {
        return await api.get(users)
    },
    create: async (data) => {
        return await api.post(users, data)
    },
    delete: async (id) => {
        return await api.delete(`${users}/${id}`)
    }
}

export default userApi;