const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAll)
    app.get('/api/authors/:id', AuthorController.getOne)
    app.post('/api/authors', AuthorController.create)
    app.put('/api/authors/:id', AuthorController.update)
    app.delete('/api/authors', AuthorController.deleteAll)
    app.delete('/api/authors/:id', AuthorController.deleteOne)
}