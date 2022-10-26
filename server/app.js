const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./src/routes/authControl");
const propRoute = require('./src/routes/propertyRoutes');
const searchRoute = require('./src/routes/searchcontrol');
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const Cors = require('cors');

const app = express();
app.use(Cors());

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://DhamaniSaranya:Dhamani1997@cluster0.howsj.mongodb.net/realestates?retryWrites=true&w=majority")
    console.log("Connection is successfull")
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  await connectDB();
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.get ("/", (req,res) => {
    res.json("server start")
  })
  app.use("/", authRoute);
  app.use("/", propRoute);
  app.use("/",searchRoute)
  app.get("/logout", authRoute ,async(req,res)=>{
    try {
      res.clearCookie("jwtoken")
      console.log("logout successfully");
      await user.save()
      res.render("login")
    } catch (error) {
      res.status(500).send(error)
    }
  });
  app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
  });
}
main();
