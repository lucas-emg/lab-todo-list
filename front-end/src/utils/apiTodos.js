import axios from "axios"

class apiTodos {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:2000/'

        })
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
            await this.api.post('/todo')
        } catch (error) {
            console.log(error)
        }
    }

    updateTodo = async (id, todo) => {
        try {
            await this.api.put(`/todo/:${id}`, todo)
        } catch (error) {
            throw error.respose
        }
    }
}

export default new apiTodos()