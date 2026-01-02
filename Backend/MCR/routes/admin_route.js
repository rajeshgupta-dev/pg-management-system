const express = require("express");
const { register } = require("../controllers/admin_controller");
const router = express.Router();


router.post("/admin/register", register);

module.exports = router