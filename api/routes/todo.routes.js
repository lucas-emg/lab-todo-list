const { Router } = require('express')
const Todo = require('../models/Todo')

const router = Router()

router.get('/', async (req, res) => {

    try {

        const allTodos = await Todo.find()

        res.status(200).json(allTodos)

    } catch {

        res.status(500)

    }
})

router.post('/', async (req, res) => {

    const payload = req.body

    try {

        const newTodo = await Todo.create(payload)

        res.status(200).json(newTodo)

    } catch (error) {

        res.status(500).json({error: error.message})

    }
})

router.put('/:id', async (req, res) => {

    const { id } = req.params
    const payload = req.body

    try {

        const updatedTodo = await Todo.findByIdAndUpdate(id, payload, {new: true})

        res.status(200).json(updatedTodo)

    } catch (error) {

        res.status(500).json({error: error.message})

    }
})

router.delete('/:id', async (req, res) => {

    const { id } = req.params

    try {
        await Todo.findByIdAndDelete(id)
        res.status(204).json()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/', async (req, res) => {

    try {

        await Todo.deleteMany({})

        res.status(204).json({ msg: 'all todos were deleted' })

    } catch (error) {
        
        res.status(500).json({ msg: error.message })
    }
})

module.exports = router