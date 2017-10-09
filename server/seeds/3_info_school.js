
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('info_school').del()
    .then(function () {
      // Inserts seed entries
      return knex('info_school').insert([
        {
          info_id:knex('info').where("name", "Josh").select("id"),
          school_id:knex("school").where("schoolName", "lanier").select("id"),
        },
        {
          info_id:knex('info').where("name", "Heidi").select("id"),
          school_id:knex("school").where("schoolName", "kenilworth").select("id"),
        },
      ]);
    });
};
