const { response } = require('express')
const {faker} = require('@faker-js/faker')
const express = require('express')
const app = express()
const port = 8000

const users = []

app.get('/users',(req,res) => {
    res.json({users})
})

app.post('/users',(req,res) => {
    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    users.push(user)
    res.json({user:user})
})

app.listen(port, ()=>console.log(`Locked and loaded on port ${port}`))