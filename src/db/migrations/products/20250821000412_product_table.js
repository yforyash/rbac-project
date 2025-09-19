/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("product").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("product", function (t) {
        t.increments("id").primary();

        t.integer("catalog_id")
          .unsigned()
          .notNullable()  
          .references("id")
          .inTable("catalog")
          .onDelete("CASCADE");

        t.string("product_code", 50).notNullable().unique();
        t.string("product_name", 100).notNullable();
        t.decimal("price", 10, 2).notNullable();
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable("product").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("product");
    }
  });
};
