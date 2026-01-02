const express = require("express");
const { register } = require("../controllers/admin_controller");
const delayResponse = require("../../middleware/delayResponse");
const router = express.Router();


router.post("/admin/register", delayResponse, register);

module.exports = router