const data = require("../datasources/ProductAttribute.json");

const tblName = "ProductAttribute";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of product_attributes");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
