import express from "express";

const port = process.env.PORT || 5001;
const app = express();

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});