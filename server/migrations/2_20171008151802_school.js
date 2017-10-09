
exports.up = function(knex, Promise) {
  return knex.schema.createTable('school', function(table){
    table.increments('id')
    table.varchar('schoolName')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('school')
};
