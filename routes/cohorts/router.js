const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ cohorts: "up" });
});

module.exports = router;
