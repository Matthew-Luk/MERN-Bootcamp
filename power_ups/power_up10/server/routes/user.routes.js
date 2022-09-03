const UserController = require("../controller/user.controller")

const routes = (app) => {
    // Create
    app.post('/api/v1/users',UserController.create)

    // Read
    app.get("/api/v1/users",UserController.getAll);

    app.get("/api/v1/users/:id",UserController.getOne);

    // Update
    app.put("/api/v1/users/:id",UserController.update);

    // Destroy
    app.delete("/api/v1/users/:id",UserController.destroy);
}

module.exports = routes