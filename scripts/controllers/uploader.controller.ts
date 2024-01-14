import { v2 as cloudinary } from 'cloudinary';
const fs = require('fs');
var UploaderController: any = {
    upload: async (req: any, res: any) => {


        
        
   
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
    },
    uploadBook: async(req:any,res:any) =>{
        let bookGlobalUrl = "";

        if(req.file.mimetype == "text/plain" ){
            await cloudinary.uploader
            .upload(req.file.path, {
                folder: 'authors-books',
                resource_type: 'raw'
            })
            .then((response)=>{
                bookGlobalUrl = response.url;
            });

        res.send({ message: 'Book uploaded',url:bookGlobalUrl });
        }else{
            await cloudinary.uploader
            .upload(req.file.path, {
                folder: 'authors-books',
                resource_type: 'image'
            })
            .then((response)=>{
                bookGlobalUrl = response.url;
            });

        res.send({ message: 'Book uploaded',url:bookGlobalUrl });
        }
        
        
        
    }
}

module.exports = UploaderController;