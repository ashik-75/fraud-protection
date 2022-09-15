import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  shop: {
    type: String,
    reuired: true,
  },
  blocked: {
    status: {
      type: Boolean,
      default: false,
    },
    values: Array,
  },
  flagged: {
    status: {
      type: Boolean,
      default: false,
    },
    values: Array,
  },
  normal: {
    status: {
      type: Boolean,
      default: false,
    },
    values: Array,
  },
});

export const Settings = mongoose.model("Settings", settingsSchema);
