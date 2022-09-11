const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.getAll);
    app.get('/api/product/:id', ProductController.getOne);
    app.post('/api/product', ProductController.create);
    app.put('/api/product/:id', ProductController.update)
    app.delete('/api/product', ProductController.deleteAll)
    app.delete('/api/product/:id', ProductController.deleteOne)
}