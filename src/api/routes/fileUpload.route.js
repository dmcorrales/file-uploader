const {Router} = require("express");
const router = Router();
const { fileUploadController } = require('../controllers');
const controller = new fileUploadController();

router.put("/upload", (req,res) => {
    controller.uploadFile(req,res);
})

router.get("/getFile/:id", (req,res) => {
    controller.getFile(req,res);
})
 
module.exports = router;