exports.up = function (knex) {
  return knex.schema.hasTable("product_variant").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("product_variant", function (t) {
        t.increments("id").primary();
        t.integer("product_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("product")
          .onDelete("CASCADE");
        t.string("variant_name", 100).notNullable();
        t.decimal("additional_price", 10, 2).defaultTo(0.0);
        t.integer("stock").defaultTo(0);
        t.timestamps(true, true);
      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.hasTable("product_variant").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("product_variant");
    }
  });
};
