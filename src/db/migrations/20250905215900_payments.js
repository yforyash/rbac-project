/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("payments", function (table) {
    table.increments("id").primary();
    table
      .integer("order_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE");
    table.decimal("amount", 10, 2).notNullable();
    table.string("payment_method", 50).notNullable(); // e.g. card, upi, cod
    table
      .enu("status", ["pending", "success", "failed", "refunded"])
      .notNullable()
      .defaultTo("pending");
    table.string("transaction_id").nullable(); // gateway reference
    table.timestamp("paid_at").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("payments");
};
