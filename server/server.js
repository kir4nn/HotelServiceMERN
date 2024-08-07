const express= require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors"); 
const app = express();
app.use(cors());  
connectDb();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/bookings",require("./routes/bookingsRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running ${port}`);
})