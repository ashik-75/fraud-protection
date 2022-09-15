import mongoose from "mongoose";

const userIdSchema = new mongoose.Schema({
  randomString: {
    type: String,
    unique: true,
    required: true,
  },
});

const UserId = mongoose.model("UserId", userIdSchema);

export default UserId;
