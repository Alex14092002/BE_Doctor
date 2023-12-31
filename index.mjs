import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.mjs'
import updateInfo from './routes/updateInfo.mjs'
import servicesRoute from './routes/servicesRoute.mjs'
import userRoute from './routes/userRoute.mjs'
import medicineRoute from './routes/medicineRoute.mjs'
const app = express();
const port = 8002;
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/uploads' , express.static('uploads'))
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });
  
  db.once("open", () => {
    console.log("MongoDB connected successfully!");
  });


app.use('/doctor/auth' , authRoute)  
app.use('/doctor/updateInfo' , updateInfo)
app.use('/services' , servicesRoute )
app.use('/user' , userRoute)
app.use('/medicine' , medicineRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
