const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb://todo-app-123:todo-app-123@ac-ynt1jrz-shard-00-00.vcemh1g.mongodb.net:27017,ac-ynt1jrz-shard-00-01.vcemh1g.mongodb.net:27017,ac-ynt1jrz-shard-00-02.vcemh1g.mongodb.net:27017/Todo-App?ssl=true&replicaSet=atlas-qqnawo-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
};

module.exports = connect;
