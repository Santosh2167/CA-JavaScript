const express = require("express");
const router = express.Router();
const ContactController = require("./controller/contact_controller");

router.get("/",ContactController.newResource);

router.post("/contacts",ContactController.create);

router.get("/contacts",ContactController.index);

module.exports = router;
