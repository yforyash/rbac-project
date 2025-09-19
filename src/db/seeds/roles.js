/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {

  await knex("roles").del();

  
  await knex("roles").insert([
    { role_name: "Admin", description: "Administrator with full access" },
    { role_name: "Editor", description: "Standard user with Partial access" },
    { role_name: "Viewer", description: "Read-only access" },
  ]);
};
