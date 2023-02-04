const express = require("express");
const router = express();

const {
  homePage,

  register,
  otpVerify,
  userLogin,
  resendOtp,
  addProfilePic,
  getAllusers,
  handleRefreshToken,
  getSingleUser,
} = require("../controllers/userController");

router.get("/", homePage);
router.get("/users", getAllusers);
router.get("/user/:id", getSingleUser);
// router.get("/register", register);
router.post("/register", register);
router.post("/otpVerify", otpVerify);
router.post("/resendOtp", resendOtp);
router.post("/login", userLogin);
router.post("/refresh", handleRefreshToken);
// router.put("/addProfilePhoto", addProfilePic);
// router.put("/editProfile/:id", editProfile);

module.exports = router;
