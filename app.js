const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const path = require("path");
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
//const addPage = require('./views/addPage');
const { db , Page, User} = require('./models');


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const init = async () => {
    await db.sync({force: true});
    await Page.sync();
    await User.sync();

}
init();

app.get("/", (req, res) => {
  res.send(layout(" "));
});

app.use('/wiki', wikiRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
