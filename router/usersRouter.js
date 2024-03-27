const express = require('express');
const router = express.Router();
// internal import
const {getUsers}=require('../controller/userController');

router.get('/',getUsers);

module.exports=router;