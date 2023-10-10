const UserController = require("./controllers/UserController");
const UserAuthenController = require("./controllers/UserAuthenController");

module.exports = (app) => {
  //get all user
  app.get("/users", UserController.index),
    //create user
    app.post("/user/:userId", UserController.create),
    //edit
    app.put("/user/:userId", UserController.put),
    //delete
    app.delete("/user/:userId", UserController.delete),
    //show by id
    app.get("/user/:userId", UserController.show),
      //login
  app.post('/login', UserAuthenController.login)
};
