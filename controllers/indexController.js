const db = require("../db/queries");
const path = require("node:path");

const publicPath = path.join(__dirname, "..", "public");

async function getUsernames(req, res) {
  const rows = await db.getAllUsernames();
  const usernames = rows.map((user) => user.username);
  res.render("index", { usernames });
}

async function createUsernameGet(req, res) {
  res.sendFile(path.join(publicPath, "form.html"));
}

async function createUsernamePost(req, res) {
  const username = req.body.username;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
