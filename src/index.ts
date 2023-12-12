import "reflect-metadata"
import express from "express";
import database from "./config/database";
import TrackRoutes from "./track/track.routes"
import  dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

database.initialize()
    .then(()=> console.log("Database connnected!"))
    .catch(console.error)

app.use('/api', (req, res)=>{
    return res.status(200).json({
        message: 'This is new feature change, a new route for products'
    })
})


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});