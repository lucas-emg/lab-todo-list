const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const router = Router()

router.post('/signup', async (req, res) => {

    const { name, email, password } = req.body

    try {

        const emailCheck = await User.findOne({email})

        if(emailCheck) throw new Error ('This email is already in user')

        const salt = await bcrypt.genSalt(12)

        const passwordHash = await bcrypt.hash(password, salt)

        User.create({
            name,
            email,
            passwordHash
        })

        res.status(201).json({ msg: "User has been successfully created" })

    } catch (error) {

        if (error.message === 'This email is already in user') res.status(400).json(error.message)

        res.status(500).json(error.message)
    }

})


module.exports = router