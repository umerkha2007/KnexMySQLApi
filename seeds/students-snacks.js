// import seed data files, arrays of objects
import studentsData from "../seed-data/students.js";
import snacksData from "../seed-data/snacks.js";

export async function seed(knex) {
  await knex("students").delete();
  await knex("Favorite_Snacks").delete();
  await knex("students").insert(studentsData);
  await knex("Favorite_Snacks").insert(snacksData);
};
