const experss = require("express");

const router = experss();
const {
  addProperty,
  getProperty,
  getSingleProperty,
} = require("../controllers/propertyController");
const { verifyToken } = require("../middleware/verifyToken");

// router.get("/maps", async (req, res) => {
//   res.render("maps");
// });
router.post("/addProperty", verifyToken, addProperty);
router.get("/", verifyToken, getProperty);

router.get("/singleProperty/:id", verifyToken, getSingleProperty);
// router.post("/user/commentPost/:id", commentPost);

module.exports = router;