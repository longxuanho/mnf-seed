const regions = require("../datasources/Region.json");

const tblName = "Region";
const { DB_SCHEMA } = process.env;

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(regions);
};
