const express=require("express");
const router=express.Router();
const cityRoutes = require('./city-routes');
// const {InfoControllers}=require("../../controllers/index.js");
const airplaneRoutes=require("./airplane-routes");
router.use('/airplane',airplaneRoutes);
router.use('/cities', cityRoutes);
// router.get('/info',InfoControllers);
module.exports=router;