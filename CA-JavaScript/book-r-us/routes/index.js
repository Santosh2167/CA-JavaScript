const express = require("express");
const router = express.Router();
const authorRoutes = require("./author_routes");

router.use("/", authorRoutes);


module.exports = router;