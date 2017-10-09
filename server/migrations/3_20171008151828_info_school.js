exports.up = function(knex, Promise) {
  return knex.schema.createTable('info_school', function(table){
    table.integer('info_id')
      .references("info.id")
        .onDelete("CASCADE")
      table.integer("school_id")
      .references('school.id')
        .onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('info_school')
};
