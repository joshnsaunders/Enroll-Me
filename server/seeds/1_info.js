// import data from './data.js'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('info').del()
    .then(function() {
      // Inserts seed entries
      return knex('info').insert([
        {
          name:"josh",
          email:"josh@josh.com",
          Fid:"103452",
        },
        { name:"heidi",
          email:"heidi@heidi.com",
          Fid:"230435",
        }
      ]);
    });
};
