
exports.up = function(knex, Promise) {
  return knex.schema.createTable('info', function(table){
    table.increments('id')
    table.varchar('name')
    table.text('email')
    table.text('Fid')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('info')
};
