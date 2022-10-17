const { JsonModel } = require("../models");

module.exports = {
  async getJson(req, res, next) {
    try {
      const resultat = await JsonModel.find();

      res.send(resultat);
    } catch (er) {
      res.send(er)
      console.log(er);
    }

    // const userOperation = new operations.UserOperation();
    // const { SUCCESS, ERROR } = userOperation.outputs;

    // userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

    // const users = await userOperation.getUsers();
  },

  async addJson(req, res, next) {
    console.log(req.body);
    try {
      const response = await JsonModel.create(req.body);
      console.log(response);
      res.status(201).send(response._id);
    } catch (e) {
      res.status(502);
    }
  },

  async getJsonById(req, res, next) {
    console.log(req.params);
    const resultat = await JsonModel.findById(req.params._id);
    res.send(resultat)
  },
};
