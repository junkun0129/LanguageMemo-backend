const router = require("express").Router();
const controller = require("../controllers/word.controller");

router.get("/list", controller.getWordsApi);
router.post("/register", controller.registerWordApi);
router.post("/delete", controller.deleteWordApi);

module.exports = router;
