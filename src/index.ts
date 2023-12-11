import express from "express";
import TrackRoutes from "./track/track.routes"

const port = process.env.PORT || 5000;
const app = express();

app.use('/api', TrackRoutes)


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});