const express= require("express");
const app= express();

require("dotenv").config();
const PORT =process.env.PORT||4000;

app.use(express.json());

const schoolRoutes = require("./routes/school");
app.use("/api",schoolRoutes);

app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})


const { dbconnection } = require('./config/database');

(async () => {
    await dbconnection();
})();

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`);
})
