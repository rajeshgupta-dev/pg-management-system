const express = require("express");
const { register, login } = require("../controllers/admin_controller");
const delayResponse = require("../../middleware/delayResponse");
const router = express.Router();


router.post("/admin/register", delayResponse, register);
router.post("/admin/login", login);


module.exports = router