import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ImageKit from 'imagekit';

// Load environment variables
dotenv.config();

const port = 4000;
const app = express();

// Middleware
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        // optionsSuccessStatus: 200,
    })
)

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  });


app.get("/api/upload", (req,res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result)
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
