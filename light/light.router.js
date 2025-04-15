const express = require("express");
const router = express.Router();

const {
    displayAction,
} = require("./light.controller.js");

router.get('/', displayAction);
module.exports = router;


