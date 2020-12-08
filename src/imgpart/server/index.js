const express = require('express');
const path = require('path');
const cors = require('cors');
const photosRouter = require('./routers/photos');
require('./db/connection');
//const express = require('express');
const multer = require('multer');
const Photo = require('../server/model/Photo');
const Router = express.Router();
const upload = multer({
  limits: {
    fileSize: 1000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
      cb(new Error('only upload files with jpg or jpeg format.'));
    }
    cb(undefined, true); // continue with upload
  }
});
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors)
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.static(path.join(__dirname, '..', 'build')));
//app.use(photosRouter);
app.post(
  '/photos',
  upload.single('photos'),
   (req, res) => {
    
      console.log("Entered post")
      const photo = new Photo(req.body);
      const file = req.file.buffer;
      photo.photo = file;

       photo.save();
      res.send("Photo saved")
      res.status(201).send({ _id: photo._id });
    
    
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send({
        upload_error: error.message
      });
    }
  }
);

app.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.send(photos);
  } catch (error) {
    res.status(500).send({ get_error: 'Error while getting list of photos.' });
  }
});

app.get('/photos/:id', async (req, res) => {
  try {
    const result = await Photo.findById(req.params.id);
    res.set('Content-Type', 'image/jpeg');
    res.send(result.photo);
  } catch (error) {
    res.status(400).send({ get_error: 'Error while getting photo.' });
  }
});


app.use((req, res, next) => {
  console.log("Entered here...")
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
 });
 
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});