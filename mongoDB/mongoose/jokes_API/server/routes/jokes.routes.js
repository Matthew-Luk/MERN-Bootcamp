const JokeController = require("../controllers/jokes.controller")

const routes = (app) => {
    // Create
    app.post("/api/jokes", JokeController.create)

    // Read
    app.get("/api/jokes", JokeController.getAll)
    app.get("/api/jokes/:id", JokeController.getOne)

    // Update
    app.put("/api/jokes/:id", JokeController.update)

    // Delete
    app.delete("/api/jokes/:id", JokeController.destroy)
}

module.exports = routes