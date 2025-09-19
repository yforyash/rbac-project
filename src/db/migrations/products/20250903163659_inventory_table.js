exports.up = function (knex) {
  return knex.schema.createTable("inventory", (table) => {
    table.increments("id").primary();
    table
      .integer("product_id")
      .unsigned()
      .references("id")
      .inTable("product")
      .onDelete("CASCADE");
    table
      .integer("variant_id").nullable()
      .unsigned()
      .references("id")
      .inTable("product_variant")
      .onDelete("CASCADE");
    table.integer("quantity").defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("inventory");
};
