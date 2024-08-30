export function up(knex) {
  // Creating the Students table
  return (
    knex.schema
      .createTable("Students", function (table) {
        table.increments("Student_ID").primary();
        table.string("Student_Name", 50);
      })
      // Creating the Favorite_Snacks table
      .createTable("Favorite_Snacks", function (table) {
        table.increments("Snack_ID").primary();
        table.string("Snack_Name", 50);
        table
          .integer("Student_ID")
          .unsigned()
          .references("Student_ID")
          .inTable("Students");
      })
  );
}

export function down(knex) {
  return knex.schema.dropTable("snacks").dropTable("students");
}
