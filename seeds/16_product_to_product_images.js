const { chunk } = require("lodash");
const data = require("../datasources/_ProductToProductImage.json");

const tblName = "_ProductToProductImage";
const { DB_SCHEMA } = process.env;

// There are a lot of order items so we must split them into chunks
const itemsPerChunk = 100;
const chunks = chunk(data, itemsPerChunk);

console.info("-- inserting", data.length, "of products_to_product_images");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);

  await chunks.reduce(async (prevPromise, nextChunk) => {
    await prevPromise;
    await knexWithSchema.table(tblName).insert(nextChunk);
  }, Promise.resolve());
};
