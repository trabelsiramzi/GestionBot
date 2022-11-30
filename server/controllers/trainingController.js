const { DiscussionModel } = require("../models");
const axios= require('axios')
module.exports = {
  async runTraining(req, res, next) {
    const { API_BOT } = process.env
    axios.get(`${API_BOT}/trainer`).then((response) => {
      res.send(response.data);

    }).catch(e => {
      res.send(e);
    })

  },
};
