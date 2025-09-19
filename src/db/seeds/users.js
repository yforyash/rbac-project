/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  
  await knex("users").del();

  
  await knex("users").insert([
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: "hashed_password_1", 
      role_id: 1,
    },
    {
      name: "Editor",
      email: "editor@gmail.com",
      password: "hashed_password_2",
      role_id: 2,
    },
    {
      name: "Viewer",
      email: "viewer@gmail.com",
      password: "hashed_password_3",
      role_id: 3,
    },
  ]);
};
