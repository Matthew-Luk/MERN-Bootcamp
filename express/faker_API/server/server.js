const { response } = require('express')
const {faker} = require('@faker-js/faker')
const express = require('express')
const app = express()
const port = 8000

const all_users_and_companies = []

app.get('/api',(req,res) => {
    res.json({all_users_and_companies})
})

app.post("/api/users/new", (req, res) => {
    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('###-###-####'),
        user_id: faker.datatype.uuid()
    }
    all_users_and_companies.push(user)
    res.json({user})
});

app.post("/api/companies/new", (req, res) => {
    const company = {
        company_id: faker.datatype.uuid(),
        name: faker.company.name(),
        address : {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    all_users_and_companies.push(company)
    res.json({company})
});

app.post("/api/user/company", (req, res) => {
    const user_company = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('###-###-####'),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        user_id: faker.datatype.uuid(),
        company_id: faker.datatype.uuid(),
        name: faker.company.name(),
        address : {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    all_users_and_companies.push(user_company)
    res.json({user_company}) 
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );