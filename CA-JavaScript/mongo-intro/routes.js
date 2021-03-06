const express = require("express");
const router = express.Router();
const ContactController = require("./controllers/contact_controller");



router.get("/",ContactController.newResource);


router.get("/contacts",ContactController.index);

router.post("/contacts",ContactController.create);

router.get("/enquiry/:id",ContactController.getEnquiry);

router.delete("/deleteEnquiry/:id",ContactController.deleteEnquiry);

module.exports = router;