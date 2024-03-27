const express = require('express');
const router = express.Router();
// internal import
const {getInbox}=require('../controller/inboxController');

router.get('/',getInbox);

module.exports=router;