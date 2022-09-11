const mongoose = require("mongoose");
const jsonSchema = new mongoose.Schema({
tag:String,
patterns:[String],
responses:[String]
}, { strict: false });

const JsonModel = mongoose.model("intents", jsonSchema);

module.exports.JsonModel = JsonModel;