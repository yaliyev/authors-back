var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req:any,file:any,cb:any)=>{
        let path = '';        
        if(file.mimetype == 'text/plain' || file.mimetype == 'application/pdf'){
            path = './books';
        }else{
            path = './images';
        }


        return cb(null,path);
    },
    filename: (req:any,file:any,cb:any)=>{
        return cb(null,`${Date.now()}_${file.originalname}`);
    }
})

module.exports = storage;