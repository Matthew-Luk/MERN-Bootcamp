const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    // Get All
    app.get('/api/product', ProductController.getAll);

    // Create
    app.post('/api/product', ProductController.create);

    // Delete One
    app.delete('/api/product/:id', ProductController.deleteOne)

    // Delete All
    app.delete('/api/product', ProductController.deleteAll)
}