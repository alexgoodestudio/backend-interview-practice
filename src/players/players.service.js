
const knex = require("../db/connection");
const tableName = "players";

function read(playerId) {
// return all of the info from tableName where the column id first matches the value of playerId                                
  return knex(tableName)
    .select("*")
    //id = column name, ":" is comparing equality, playerID = value 
    .where({ id: playerId })
    .first();
}
//.insert(newPlayer, "*"): This inserts the newPlayer object into the table and returns all columns of the newly inserted record (indicated by "*").
//.then((data) => data[0]): After the insertion is complete, the promise resolves with an array containing the newly inserted records. Since you're inserting only one record, you return the first element of the array (data[0]).


function create(newPlayer) {
  // Complete the implementation of this method.
    return knex(tableName)
    //Insert the new player data into the database and return all the details of the newly inserted record.
    .insert(newPlayer, "*")
    .then((data) => data[0]);
}

module.exports = {
  create,
  read,
};
