const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.getAll);
    app.post('/api/product', ProductController.create);
    app.delete('/api/product/:id', ProductController.deleteOne)
    app.delete('/api/product', ProductController.deleteAll)
}