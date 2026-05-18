const db = require("../db/queries");
const path = require("node:path");

const publicPath = path.join(__dirname, "..", "public");

async function getUsernames(req, res) {
  const rows = await db.getAllUsernames();
  const usernames = rows.map((user) => user.username);
  res.render("index", { usernames, isSearch: false });
}

async function createUsernameGet(req, res) {
  res.sendFile(path.join(publicPath, "form.html"));
}

async function createUsernamePost(req, res) {
  const username = req.body.username;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsername(req, res) {
  const rows = await db.searchUsername(req.query.searchUser);
  const usernames = rows.map((user) => user.username);
  res.render("index", { usernames, isSearch: true });
}

async function deleteUsername(req, res) {
  await db.deleteUsername(req.params.username);
  res.redirect("/");
}

async function deleteAllUsernames(req, res) {
  await db.deleteAllUsernames();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsername,
  deleteUsername,
  deleteAllUsernames,
};
