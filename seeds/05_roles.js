const data = require("../datasources/Role.json");

const tblName = "Role";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of roles");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
