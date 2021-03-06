import axios from "axios"

class apiTodos {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/'

        })

        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if(token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            return config
        }, (error) => {console.log(error)})
    }

    getAllTodos = async () => {
        try {
            const { data } = await this.api('/todo')
            return data
        } catch (error) {
            console.log(error)
        }
    }

    deleteTodo = async (id) => {
        try {
            await this.api.delete(`todo/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    createNewTodo = async (newTodo) => {
        try {
            await this.api.post('/todo', newTodo)
        } catch (error) {
            console.log(error)
        }
    }

    updateTodo = async (id, todo) => {
        try {
            await this.api.put(`/todo/${id}`, todo)
        } catch (error) {
            throw error.respose
        }
    }

    deleteAll = async () => {
        try {
            await this.api.delete('/todo')
        } catch (error) {
            throw error.response
        }
    }
}

export default new apiTodos()