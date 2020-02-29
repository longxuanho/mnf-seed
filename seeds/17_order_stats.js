const data = require("../datasources/OrderStats.json");

const tblName = "OrderStats";
const { DB_SCHEMA } = process.env;

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
