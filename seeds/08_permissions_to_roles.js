const data = require("../datasources/_PermissionToRole.json");

const tblName = "_PermissionToRole";
const { DB_SCHEMA } = process.env;

console.info("-- inserting", data.length, "of permissions_to_roles");

exports.seed = async knex => {
  const knexWithSchema = knex.withSchema(DB_SCHEMA);

  await knex.raw(`TRUNCATE TABLE ${DB_SCHEMA}."${tblName}" CASCADE`);
  await knexWithSchema.table(tblName).insert(data);
};
