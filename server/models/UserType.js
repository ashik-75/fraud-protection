import mongoose from "mongoose";

const userTypeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    ip: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },
    userType: {
      level: {
        type: String,
        default: "",
      },
      type: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const UserType = mongoose.model("UserType", userTypeSchema);

export default UserType;
