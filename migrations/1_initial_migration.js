const Migrations = artifacts.require("Event");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
