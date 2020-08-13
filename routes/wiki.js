const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");

const { Page } = require("../models");
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", async (req, res, next) => {


  try{
    const page = await Page.create({ title: author , content: });
    res.redirect("/");
  }

});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
