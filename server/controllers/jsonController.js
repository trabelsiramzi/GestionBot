const { JsonModel } = require("../models");

module.exports = {
  async getJson(req, res, next) {
    try {
      const resultat = await JsonModel.find();

      res.send(resultat);
    } catch (er) {
      res.send(er);
    }
  },

  async addJson(req, res, next) {
    try {
      const response = await JsonModel.create(req.body);
      res.status(201).send(response._id);
    } catch (e) {
      res.status(502);
    }
  },

  async getJsonById(req, res, next) {
    try {
      const resultat = await JsonModel.findById(req.params._id);
      res.send(resultat);
    } catch (e) {
      res.status(502);
    }
  },
  async addJsonById(req, res, next) {
    try {
      resultat = await JsonModel.findByIdAndUpdate(req.params._id, req.body);
      res.send(resultat.id);
    } catch (e) {
      res.status(502).send(e);
    }
  },
  async deleteById(req, res, next) {
    try {
      await JsonModel.findByIdAndDelete(req.params._id);
      res.status(204).send("ok");
    } catch (e) {
      res.status(502).send(e);
    }
  },
};
