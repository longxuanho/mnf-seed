const { chunk } = require("lodash");
const data = require("../datasources/OrderItem.json");

const tblName = "OrderItem";
const { DB_SCHEMA } = process.env;

// There are a lot of order items so we must split them into chunks
const itemsPerChunk = 100;
const chunks = chunk(data, itemsPerChunk);

console.info("-- inserting", data.length, "of order_items");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);

  await chunks.reduce(async (prevPromise, nextChunk) => {
    await prevPromise;
    await knexWithSchema.table(tblName).insert(nextChunk);
  }, Promise.resolve());
};
