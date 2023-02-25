const express = require("express");
const { Addcv, Getcvs, Delcv, Editcv, GetOnecv } = require("../controllers/cv");


const cvRoute = express.Router();

cvRoute .post("/addcv", Addcv);
cvRoute .get("/getcv", Getcvs);
cvRoute .delete("/delcv/:id", Delcv);
cvRoute .put("/editcv/:id", Editcv);
cvRoute .get("/getOnecv/:id", GetOnecv);

module.exports = cvRoute ;
