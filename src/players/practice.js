// const router = require("express").Router();
// const controller = require("./players.controller");
// const methodNotAllowed = require("../errors/methodNotAllowed");

// router.route("/")
//     .post(controller.create)
//     .all(methodNotAllowed);

//     router.route("/:playerId")
//         .get(controller.read)
//         .all(methodNotAllowed);

// module.exports = router

// const router = require("express").Router();
// const controller = require("./players.controller");
// const methodNotAllowed =require("../errors/methodNotAllowed");

// router.route("/")
//     .post(controller.create)
//     .all(methodNotAllowed)

// router.route("/:playerId")
//     .get(controller.read)
//     .all(methodNotAllowed)

// const knex = require("../db/connection")
// const tableName = "players";

// function read(playerId){
//     return knex(tableName)
//     .select("*")
//     // .where({id : playerId})
//     .where("id", "=", playerId)
//     .first();
// }

// function create(newPlayer){
//     return knex(tablename)
//     //After inserting new player record,returns all columns of the newly inserted record (indicated by "*").first param specifies what data you want to insert into the table, and second param specifies what you want to be returned after the insertion.
//     .insert(newPlayer,"*")
//     // line takes the array of newly inserted records returned by the .insert() method and returns just the first record.
//     .then((data) => data [0])
// }

// function read(playerId){
//     return knex(tableName)
//     .where("id", "=", playerId)
//     .first()
// }

// function read (playerId){
//     return knex(tableName)
//         .select("*")
//         .where({id : playerId})
//         .first()
// }

// function read(playerId){
//     return knex(tableName)
//         .select("*")
//         .where({id: playerId})
//         .first()
// }

// function read(playerID)
//     return knex(tableName)
//     .select("*")
//     .where({id : playerId})
//     .first()

//     function create(newPlayer){
//         return knex(tableName)
//         .insert(newPlayer,"*")
//         .then((data) => data[0])
//     }

//     function create(newPlayer){
//         return knex(tableName)
//         .insert(newPlayer,"*")
//         .then((data) => data[0])
//     }

//     function create(newPlayer){
//         return knex(tableName)
//         .insert(newPlayer, "*")
//         .then((data) => data[0])
//     }

    const service = require("./players.service");
    const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

    async function playersExist(req,res,next){
        const { playerId } = req.params;
    
        const player = await service.read(playerId)

        if(player){
            res.locals.player = player;
            return next()
        }
        next({
            status:404,
            message:`Player Id Not Found`
        })
    }

    function read(req,res){
        res.status(200).json({data: res.locals.player})
    }

    async function create(req, res){
        const data = await service.create(req.body.data)
        res.status(201).json({data});
    }

    module.exports ={
        read: [asyncErrorBoundary(playerExists),read],
        create
    }