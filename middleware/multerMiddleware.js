const multer = require('multer')


const storage = multer.diskStorage({
    destination:(req,file,callb)=>{
        callb(null,'./uploads')
    },
    filename:(req,file,callb)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        callb(null,filename)
    }
})

const fileFilter = (req,file,callb) =>{
    console.log('inside multer');
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' ||file.mimetype=='image/jpeg'){
        callb(null,true)
    }
    else{
        callb(null,false)
        return callb(new Error("only allows png,jpg,jpeg files"))
    }
}


const multerConfig = multer({
    storage,
    fileFilter,
})

module.exports = multerConfig
