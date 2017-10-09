// import data from './data.js'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('school').del()
    .then(function() {
      // Inserts seed entries
      return knex('school').insert([
        {
          schoolName:"lanier",
        },
        { schoolName:"kenilworth",
        }
      ]);
    });
};
