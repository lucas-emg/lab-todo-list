import axios from "axios"

class apiAuth {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/auth'
        })
    }

    signUp = async (newUser) => {

        try {

            await this.api.post('/signup', newUser)

        } catch (error) {

            if(error.message === 'Request failed with status code 400') {
                throw new Error ('Email is already in use')
            }

        }
    }

    logIn = async (credentials) => {

        try {

            const { data: { token } } = await this.api.post('/login', credentials)

            localStorage.setItem('token', token)

        } catch (error) {

            if(error.message === 'Request failed with status code 401') {
                throw new Error ('Username or password are invalid')
            }
            

        }
    }

}

export default new apiAuth()