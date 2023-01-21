const experss = require("express");

const router = experss();
const {
  addProperty,
  getSaved,
  addToSaved,
} = require("../controllers/savedController");
const { verifyToken } = require("../middleware/verifyToken");

// router.get("/maps", async (req, res) => {
//   res.render("maps");
// });
router.get("/", verifyToken, getSaved);
router.post("/addToSaved/:id", verifyToken, addToSaved);

// router.get("/singleProperty/:id", verifyToken, getSingleProperty);
// router.post("/user/commentPost/:id", commentPost);

module.exports = router;
