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

            console.log(error)

        }
    }

}

export default new apiAuth()