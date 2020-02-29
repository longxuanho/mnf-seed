const data = require("../datasources/_ProductToProductCollection.json");

const tblName = "_ProductToProductCollection";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of products_to_product_collections");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
