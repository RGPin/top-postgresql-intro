const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.DB_ROLE,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// With Connection URI
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
