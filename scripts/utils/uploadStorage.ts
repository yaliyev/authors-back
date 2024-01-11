var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req:any,file:any,cb:any)=>{
        return cb(null,"./images");
    },
    filename: (req:any,file:any,cb:any)=>{
        return cb(null,`${Date.now()}_${file.originalname}`);
    }
})

module.exports = storage;