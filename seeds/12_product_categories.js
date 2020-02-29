const data = require("../datasources/ProductCategory.json");

const tblName = "ProductCategory";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of product_categories");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
