import mongoose from "mongoose";

//creating schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//crating model
const User = mongoose.model("User", userSchema);

//making able to use this "User" model, in application anywhere
export default User;
