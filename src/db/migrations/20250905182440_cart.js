/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cart', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users')
            .onDelete('CASCADE');
        table.integer('product_id').unsigned().notNullable()
            .references('id').inTable('product')
            .onDelete('CASCADE');
        table.integer('quantity').unsigned().notNullable().defaultTo(1);
        table.timestamp('added_at').defaultTo(knex.fn.now());
    }
  
    );
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cart');
  
};
