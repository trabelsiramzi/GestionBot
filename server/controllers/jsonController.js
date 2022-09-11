const {JsonModel} = require("../model/jsonModel")
const mongoose = require("mongoose");


module.exports = {
  async getJson(req, res, next) {
    console.log(JsonModel)
    try{
        const resultat= await JsonModel.find()
      
        res.send(resultat);  
    }catch(er){
console.log(er)
    }

  
    
    // const userOperation = new operations.UserOperation();
    // const { SUCCESS, ERROR } = userOperation.outputs;

    // userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

    // const users = await userOperation.getUsers();
  },

//   async addJson(req, res, next) {
//     const userOperation = new operations.UserOperation();
//     const { SUCCESS, ERROR } = userOperation.outputs;

//     userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

//     const user = await userOperation.addUser(req.body);
//   },

//   async getJsonById(req, res, next) {
//     const userOperation = new operations.UserOperation();
//     const { SUCCESS, ERROR } = userOperation.outputs;

//     userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
//     const user = await userOperation.getUserById(req.params);
//   }
};