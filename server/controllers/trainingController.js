const { DiscussionModel } = require("../models");

module.exports = {
  async runTraining(req, res, next) {
    try {
      res.send('training is runing');
    } catch (er) {
      res.send(er);
    }
  },
};
