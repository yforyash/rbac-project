/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("roles").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("roles", function (t) {
        t.increments("id").primary();
        t.string("role_name", 50).notNullable().unique();
        t.string("description", 255);
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable("roles").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("roles");
    }
  });
};
