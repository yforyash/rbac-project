/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    console.log("env---", process.env);
    
  return knex.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('users', function (t) {
      t.increments('id').primary();
      t.string('name', 20);
      t.string('email', 50);
      t.text('password');
    });
  }
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('users').then(function (exists) {
  if (exists) {
    return knex.schema.dropTable('users',)
  }
});
};
