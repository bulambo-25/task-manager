/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.text('description');
        table.dateTime('date_time').defaultTo(knex.fn.now());
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
};
