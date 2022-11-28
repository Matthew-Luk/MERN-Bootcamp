const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    // Get All
    app.get('/api/product', ProductController.getAll);

    // Get One
    app.get('/api/product/:id', ProductController.getOne);

    // Create
    app.post('/api/product', ProductController.create);

    // Update
    app.put('/api/product/:id', ProductController.update);

    // Delete All
    app.delete('/api/product', ProductController.deleteAll);

    // Delete One
    app.delete('/api/product/:id', ProductController.deleteOne);
}