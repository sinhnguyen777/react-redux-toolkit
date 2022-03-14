import api from './config'

const users = 'users'

const userApi = {
    getAll: async () => {
        return await api.get(users)
    },
    create: async (data) => {
        return await api.post(users, data)
    },
    getById: async (id) => {
        return await api.get(`${users}/${id}`)
    },
    update: async (id) => {
        return await api.put(`${users}/${id}`)
    },
    delete: async (id) => {
        return await api.delete(`${users}/${id}`)
    }
}

export default userApi;