import "reflect-metadata"
import express from "express";
import database from "./config/database";
import TrackRoutes from "./track/track.routes"
import SpotifyRoutes from "./spotify/spotify.routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json"
import  dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

database.initialize()
    .then(()=> console.log("Database connnected!"))
    .catch(console.error)

app.use('/api', TrackRoutes)
app.use('/api', SpotifyRoutes)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));    


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});