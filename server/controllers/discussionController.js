const { DiscussionModel } = require("../models");

module.exports = {
  async getdiscussion(req, res, next) {
    try {
      const { search } = req.query;
      const searchRegex = new RegExp(search, "i");
      const resultat = await DiscussionModel.find({
        $or: [{ Question: searchRegex }, { Reponse: searchRegex }],
      });
      res.send(resultat);
    } catch (er) {
      res.send(er);
    }
  },
};
