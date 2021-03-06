const data = require("../datasources/_RoleToUser.json");

const tblName = "_RoleToUser";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of roles_to_users");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
