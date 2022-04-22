const express = require("express");
const { getUsers } = require("../controllers/usersController");
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const uploadAvatar = require("../middlewares/users/uploadAvatar");
const router = express.Router();

// users page
router.get('/', decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/", uploadAvatar);

module.exports = router;