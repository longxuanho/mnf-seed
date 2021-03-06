const data = require("../datasources/ProductImage.json");

const tblName = "ProductImage";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of product_images");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
