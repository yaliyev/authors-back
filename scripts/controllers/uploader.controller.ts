import { v2 as cloudinary } from 'cloudinary';
const fs = require('fs');
var UploaderController: any = {
    upload: async (req: any, res: any) => {


        console.log(`-----`);
        
        console.log(req.file);
        
        
        let imageGlobalUrl = "";
        await cloudinary.uploader
            .upload(req.file.path, {
                folder: 'authors-images',
                resource_type: 'image'
            })
            .then((response)=>{
            imageGlobalUrl = response.url;
            });

        res.send({ message: 'Image uploaded',url:imageGlobalUrl });
    }
}

module.exports = UploaderController;