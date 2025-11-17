const express=require("express");
const router=express.Router();
const {AirplaneControllers}=require("../../controllers");
router.post("/",AirplaneControllers.createAirplane);
module.exports=router