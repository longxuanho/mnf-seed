const countries = require("../datasources/User.json");

const tblName = "User";
const { DB_SCHEMA } = process.env;

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(countries);
};