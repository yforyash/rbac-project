/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("catalog", function (t) {
    t.increments("id").primary();
    t.string("catalog_name").notNullable();
    t.string("description", 255);
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").nullable();
    t.timestamp("deleted_at").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable("catalog").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("catalog");
    }
  });
};

