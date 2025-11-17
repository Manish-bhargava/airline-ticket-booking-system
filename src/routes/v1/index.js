const express=require("express");
const router=express.Router();
const {InfoControllers}=require("../../controllers/index.js");
const airplaneRoutes=require("./airplane-routes");
router.use('/airplane',airplaneRoutes);
router.get('/info',InfoControllers);
module.exports=router;