var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _project = require("./project");
var _tag = require("./tag");
var _user = require("./user");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  project.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(project, { foreignKey: "user_id"});

  return {
    comment,
    project,
    tag,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
