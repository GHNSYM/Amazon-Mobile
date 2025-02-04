//IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

//INI
const PORT = 3000;
const app = express();
const DB="mongodb+srv://ghnsym:2HZZ6SNo9Xm9t87M@cluster0.k8zz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//middleware
app.use(authRouter);
app.use(express.json);


//connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful.");
  })
  .catch((e)=>{
     console.log(e);
  });


app.listen(PORT, "0.0.0.0", () => {
  console.log("lsfja");
});
