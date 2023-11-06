import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  Degree: String,
  CollegeInstitute: String,
  YearOfCompletion: Number,
});

const experienceDetail = new mongoose.Schema({
  nameHopital: String,
  From: String,
  To: String,
  Designation: String,
});

const awardsDetail = new mongoose.Schema({
  nameAward: String,
  Year: String,
});

const memberDetail = new mongoose.Schema({
  Name: String,
});

const registrationsDetail = new mongoose.Schema({
  Name: String,
  Year: String,
});
const listPatient = new mongoose.Schema({
  Name : String,
  Email : String,
  Phone : String,
  Date : Date ,
  Time : String
})
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      minLength: 3,
      maxLength: 30,
    },
    avt: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 11,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
    },
    birth: {
      type: String,
    },
    about: {
      type: String,
    },
    nameclinic: {
      type: String,
    },
    addressclinic: {
      type: String,
    },
    Imgclinic: [
      {
        type: String,
      },
    ],
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    country: {
      type: String,
    },
    postal: {
      type: String,
    },
    bloodGruop: {
      type: String,
    },
    services: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Services",
    },
    education: [educationSchema],
    experience: [experienceDetail],
    awards: [awardsDetail],
    memberships: [memberDetail],
    registrations: [registrationsDetail],
    listPatient : [listPatient]
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
