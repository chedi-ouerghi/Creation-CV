const express = require("express");
const connectDB = require("./config/connectDB");
const emailRoutes = require("./routes/email");
const cvRoute = require("./routes/cv");
const userRoutes = require("./routes/user");
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });



const app = express();
const port = 6200;

app.use(express.json());
connectDB();
app.use("/user", userRoutes);
app.use("/email", emailRoutes);
app.use("/cv", cvRoute);
// app.post('/upload', upload.single('file'), function (req, res, next) {
//   res.json({ success: true, filename: req.file.filename });
// });


app.listen(port, console.log(`app is runnig on port ${port}`));
