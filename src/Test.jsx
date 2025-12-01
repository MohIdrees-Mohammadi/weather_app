const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());

/* ======================================================
   1. CONNECT TO MONGODB
   OUTPUT (Console):
   "MongoDB Connected"
   ====================================================== */
mongoose.connect("mongodb://localhost:27017/upload-demo")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));



/* ======================================================
   2. MONGOOSE SCHEMA
   Data stored in MongoDB will look like:

   {
     "_id": "...",
     "name": "Idrees",
     "image": "uploads/1732240212345.jpg"
   }
   ====================================================== */
const UserSchema = new mongoose.Schema({
    name: String,
    image: String // <-- We store only the file path (string)
});
const User = mongoose.model("User", UserSchema);



/* ======================================================
   3. MULTER CONFIGURATION
   This section controls:
   - Where file is stored
   - File name format
   - Allowed extensions
   - File size limit
   ====================================================== */

// Folder: uploads/
// Filename example: 1732240212345.jpg
//
// OUTPUT of req.file after upload:
// {
//   fieldname: 'image',
//   originalname: 'myPhoto.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'uploads/',
//   filename: '1732240212345.jpg',
//   path: 'uploads/1732240212345.jpg',
//   size: 102030
// }
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Allowed extensions
const allowedExt = [".jpg", ".jpeg", ".png"];

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();

    // OUTPUT if rejected:
    // "Only JPG, JPEG, PNG files allowed"
    if (!allowedExt.includes(ext)) {
        return cb(new Error("Only JPG, JPEG, PNG files allowed"));
    }

    cb(null, true);
};

// Multer instance
// OUTPUT if file > 2MB:
// { error: "File too large! Max 2MB allowed." }
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
});



/* ======================================================
   4. SERVE UPLOADS FOLDER PUBLICLY
   This makes images accessible at:
   http://localhost:5000/uploads/<filename>

   Example output:
   "http://localhost:5000/uploads/1732240212345.jpg"
   ====================================================== */
app.use("/uploads", express.static("uploads"));



/* ======================================================
   5. UPLOAD FILE + SAVE PATH IN DB
   ENDPOINT: POST /upload
   Send form-data:
   - key: image (file)
   - key: name (text)

   OUTPUT (Success):
   {
     "message": "Uploaded successfully",
     "imageURL": "http://localhost:5000/uploads/1732240212345.jpg"
   }

   OUTPUT (Invalid extension):
   { "error": "Only JPG, JPEG, PNG files allowed" }

   OUTPUT (File too large):
   { "error": "File too large! Max 2MB allowed." }
   ====================================================== */
app.post("/upload", (req, res) => {
    upload.single("image")(req, res, async (err) => {

        // Handle Multer errors
        if (err) {
            const msg = err.code === "LIMIT_FILE_SIZE"
                ? "File too large! Max 2MB allowed."
                : err.message;

            return res.status(400).json({ error: msg });
        }

        try {
            // Store user in DB with file path
            const user = await User.create({
                name: req.body.name,
                image: req.file.path   // Example: "uploads/1732240212345.jpg"
            });

            res.json({
                message: "Uploaded successfully",
                // Full accessible URL
                imageURL: `${req.protocol}://${req.get("host")}/${user.image}`
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
});



/* ======================================================
   6. GET USER DATA + IMAGE URL
   ENDPOINT: GET /user/:id

   OUTPUT:
   {
     "name": "Idrees",
     "imageURL": "http://localhost:5000/uploads/1732240212345.jpg"
   }
   ====================================================== */
app.get("/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);

    res.json({
        name: user.name,
        imageURL: `${req.protocol}://${req.get("host")}/${user.image}`
    });
});



/* ======================================================
   7. START SERVER
   OUTPUT (Console):
   "Server running on port 5000"
   ====================================================== */
app.listen(5000, () => console.log("Server running on port 5000"));
