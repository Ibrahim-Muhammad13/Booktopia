const multer=require("multer");
const storage = multer.diskStorage({
   destination: function (req, file, callback) {
       callback(null, __dirname + '/images');
   },
   filename: function (req, file, callback) {
      const filename = file.originalname; // Create custom filename (crypto.randomUUID available in Node 19.0.0+ only)
      req.body.image='http://localhost:3000/images/'+filename
      console.log(req.body)
      callback(null, filename);
   }
 })

 
const upload = multer({ 
   storage: storage,
   limits: {
      fileSize: 1048576 // Defined in bytes (1 Mb)
   }, 
})



module.exports = upload