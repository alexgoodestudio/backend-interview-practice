const router = require("express").Router();
const controller = require("./players.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

//Add the appropriate methods in this file

router.route("/")
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:playerId")
    .get(controller.read)
    .all(methodNotAllowed);



module.exports = router;


