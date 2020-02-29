const data = require("../datasources/_ProductToProductAttribute.json");

const tblName = "_ProductToProductAttribute";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of products_to_product_attributes");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
