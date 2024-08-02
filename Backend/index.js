import express from "express"
import ImageKit from "image"

const port = process.env.PORT || 3000;
const app = express();

const imagekit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_PUBLIC_KEY,
    privateKey: process.env.VITE_PRIVATE_KEY,
  });


app.get("/api/upload", (req,res)=>{
    res.send("It Working......")
})

app.listen(port, ()=>{
    console.log("Server is running on 3000");
})
