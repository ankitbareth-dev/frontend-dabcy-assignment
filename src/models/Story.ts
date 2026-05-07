import mongoose from "mongoose";
import { Story } from "../types/story.types.js";

const storySchema = new mongoose.Schema<Story>({
  title: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  points: {
    type: Number,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  postedAt: {
    type: String,
    required: true,
  },
});

const Story = mongoose.model<Story>("Story", storySchema);

export default Story;
