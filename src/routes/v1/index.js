const express=require("express");
const router=express.Router();
const {InfoControllers}=require("../../controllers/index.js");
router.get('/info',InfoControllers);
module.exports=router;