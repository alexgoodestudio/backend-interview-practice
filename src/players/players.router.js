const router = require("express").Router();
const controller = require("./players.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

//Add the appropriate methods in this file


router.route("/:playerId")
.get(controller.read)
.all(methodNotAllowed);

router.route("/")
    .post(controller.create)
    .all(methodNotAllowed);


module.exports = router;


