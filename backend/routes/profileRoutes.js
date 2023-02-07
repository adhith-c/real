const express = require("express");
const router = express();
const { verifyToken } = require("../middleware/verifyToken");
const {
  getProfile,
  postProfile,
  editProfile,
  changeEmail,
  verifyOtp,
} = require("../controllers/profileController");

router.get("/", verifyToken, getProfile);
router.post("/", verifyToken, postProfile);
// router.post("/changeEmail", verifyToken, changeEmail);
// router.post("/verifyOtp", verifyToken, verifyOtp);
// router.post("/otpVerify", otpVerify);
// router.post("/resendOtp", resendOtp);
// router.post("/login", userLogin);
// router.post("/refresh", handleRefreshToken);
// router.put("/addProfilePhoto", addProfilePic);
router.post("/editProfile", editProfile);

module.exports = router;
