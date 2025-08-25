/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("product").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("product", function (t) {
        t.increments("id").primary();
        t.unique("product_code");
        t.string("product_name", 20);
        t.decimal("price", 10, 2);
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
