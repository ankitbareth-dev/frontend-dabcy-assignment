import mongoose from "mongoose";
import { User } from "../types/user.types.js";

const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: true,
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

  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});

const User = mongoose.model<User>("User", userSchema);

export default User;
