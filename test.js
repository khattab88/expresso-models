const models = require("./index");

const tag = new models.Tag();
console.log(tag.constructor);

const user = new models.User();
console.log(user.constructor);