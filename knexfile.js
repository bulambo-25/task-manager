// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'user_task_manager'
  }

};
