import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    shop: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
    },
    location: Object,
  },
  {
    timestamps: true,
  }
);

const Analytics = mongoose.model("Analytics", analyticsSchema);

export default Analytics;
