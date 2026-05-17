const express = require("express");
const path = require("node:path");

const app = express();
const indexRouter = require("./routes/indexRouter");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening to port ${PORT}...`);
});
