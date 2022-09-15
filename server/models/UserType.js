import mongoose from "mongoose";

const userTypeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },
    ip: {
      type: String,
      default: "",
      trim: true,
    },
    shippingAddress: Object,
    billingAddress: Object,
    email: {
      type: String,
      unique: false,
      required: true,
      lowercase: true,
      trim: true,
    },
    note: {
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
    shop: {
      type: String,
      default: "",
    },
    webhooks: [{ webhookType: String, count: Number, webhookIds: [] }],
  },
  {
    timestamps: true,
  }
);

const UserType = mongoose.model("UserType", userTypeSchema);

export default UserType;
