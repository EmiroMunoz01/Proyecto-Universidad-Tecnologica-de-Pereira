const express = require("express");
const router = express.Router();
const cacaosController = require("../controllers/cacaos.controller");

router.post("/", cacaosController.create);
router.get("/", cacaosController.find);
router.get("/:id", cacaosController.findOne);
router.put("/:id", cacaosController.update);
router.delete("/:id", cacaosController.remove);


module.exports = router;
