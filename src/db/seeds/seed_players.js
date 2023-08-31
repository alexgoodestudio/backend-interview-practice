/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('players').del()
      .then(function () {
          // Inserts seed entries
          return knex('players').insert([
              {first_name: 'LeBron', last_name: 'James', team: 'Los Angeles Lakers'},
              {first_name: 'Stephen', last_name: 'Curry', team: 'Golden State Warriors'},
              {first_name: 'Kevin', last_name: 'Durant', team: 'Phoenix Suns'},
              {first_name: 'Luka', last_name: 'Doncic', team: 'Dallas Mavericks'}
          ]);
      });
};