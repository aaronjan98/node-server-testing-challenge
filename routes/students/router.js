const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ students: "up" });
});

module.exports = router;
