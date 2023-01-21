const Chat = require("../models/chat");

exports.createChat = async (req, res) => {
  const newChat = new Chat({
    members: [req.body.senderId, req.body.recieverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.userChats = async (req, res) => {
  try {
    const chat = await Chat.find({ members: { $in: [req.params.userId] } });
    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};
