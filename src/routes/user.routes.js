const router = require("express").Router();

const userController = require('../controllers/users.controller');

module.exports = app => {
  // Creat new user
  router.post("/", userController.create);

  //Retreve all user
  router.get("/", userController.findAll);

  //Retreve a single user 
  router.get("/", userController.findOne);

  // Update a User id
  router.put("/", userController.update);

  //Delete a user id
  router.delete("/", userController.delete);

  app.use('/api/users', router);
};