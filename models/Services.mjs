import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Services", servicesSchema);
