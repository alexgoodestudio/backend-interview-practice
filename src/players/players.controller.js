const service = require("./players.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function playerExists(req, res, next) {
  const { playerId } = req.params;

  const player = await service.read(playerId);

  if (player) {
    res.locals.player = player;
    return next();
  }
  next({ status: 404, message: `Player id not found: ${playerId}` });
}

function read(req, res) {
  // Complete the implementation of this method.
  res.status(200).json({data:res.locals.player})
}

async function create(req, res) {
  // Complete the implementation of this method.
  const data = await service.create(req.body.data);
  res.status(201).json({ data});
}


// Make sure exports are correct.
module.exports = {
  read: [asyncErrorBoundary(playerExists), read],
  create,
};