const mongoose = require("mongoose");
const discussionSchema = new mongoose.Schema(
  {
     Question: String,
     Reponse: String,
  },
);

const DiscussionModel = mongoose.model("discussion", discussionSchema,'discussion');

module.exports = DiscussionModel;
