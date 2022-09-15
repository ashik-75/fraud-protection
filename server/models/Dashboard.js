import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  blocked: Array,
  flagged: Array,
  normal: Array,
});

const userSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

const DashboardSchema = new mongoose.Schema(
  {
    shop: {
      type: String,
      required: true,
    },
    users: [userSchema],
    settings: settingsSchema,
  },
  {
    timestamps: true,
  }
);

const Dashboard = mongoose.model("Dashboard", DashboardSchema);

export default Dashboard;
