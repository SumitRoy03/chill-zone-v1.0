const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const {
    accessChat,
    fetchChats,
    createGroupChat,
    removeFromGroup,
    addToGroup,
    renameGroup,
  } = require("../controllers/chatController");

const router = express.Router();

router.route('/').get(protect, fetchChats);
router.route('/').post(protect, accessChat);

router.route('/group').post(protect,createGroupChat);
router.route('/rename').put(protect,renameGroup);
router.route('/groupremove').put(protect,removeFromGroup);
router.route('/groupadd').put(protect,addToGroup);

module.exports = router;