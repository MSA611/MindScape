import mongoose from "mongoose";

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    content: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("note", NoteSchema);

export default Note;
