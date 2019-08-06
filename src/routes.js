const express = require('express')

const routes = express.Router()

    routes.get('/', (req, res) => {
        res.status(200).send("ok")
    })

    routes.post('/devs', (req, res) => {
       res.status(201).json(req.body)
    })

module.exports = routes