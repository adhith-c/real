const Property = require("../models/property");
const User = require("../models/user");
const { post } = require("../routes/adminRoutes");

exports.addProperty = async (req, res) => {
  try {
    console.log("hii guyss");
    console.log("req body:", req.body);
    const userEmail = req.user.UserInfo.email;
    console.log("user mail", userEmail);
    const user = await User.findOne({ email: userEmail });

    const property = new Property({
      title: req.body.propertyData.propertyName,
      address: req.body.propertyData.address,
      price: req.body.propertyData.price,
      views: req.body.propertyData.views,
      rooms: req.body.propertyData.rooms,
      bathRooms: req.body.propertyData.bathRooms,
      HalfBathRooms: req.body.propertyData.HalfBathRooms,
      squareFoot: req.body.propertyData.squareFoot,
      yearBuilt: req.body.propertyData.yearBuilt,
      Description: req.body.propertyData.description,
      propertyType: req.body.propertyType,
      listingType: req.body.listingType,
      image: [...req.body.url],
      userId: user._id,
      userName: user.firstName + user.lastName,
      userMail: userEmail,
      lattitude: parseFloat(req.body.lat),
      longitude: parseFloat(req.body.lng),
      zoom: parseFloat(req.body.zoom),
    });
    await property.save();
    console.log("sucesssss");
    // res.send(property);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

exports.getProperty = async (req, res) => {
  try {
    if (req.user) {
      // console.log("req user", req.user);
      const user = await User.findOne({ email: req.user.UserInfo.email });
      // console.log("user jis", user);
      const properties = await Property.find({ userId: { $ne: user._id } });
      res.status(200).send({ properties });
    } else {
      res.status(403).send("UNAuthorized");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

exports.getSingleProperty = async (req, res) => {
  try {
    if (req.user) {
      const propertyId = req.params.id;
      console.log("id", propertyId);
      const property = await Property.findById(propertyId);
      const mainImg = property.image[0];
      console.log("property images:", mainImg);
      res.status(200).send({ property, mainImg });
    } else {
      res.status(403).send("UNAuthorized");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

exports.MyProperties = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findOne({ email: req.user.UserInfo.email });
      const property = await Property.find({ userId: user._id });

      res.status(200).send({ property });
    } else {
      res.status(403).send("UNAuthorized");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};
