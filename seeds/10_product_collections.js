const data = require("../datasources/ProductCollection.json");

const tblName = "ProductCollection";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of product_collections");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
