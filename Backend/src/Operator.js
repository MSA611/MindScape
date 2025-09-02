import Note from "./NotesModel.js";

export async function getAll(_, res) {
  try {
    const note = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error In getAll" });
  }
}

export async function Create(req, res) {
  try {
    const { title, content } = req.body;
    const NewNote = new Note({
      title: title,
      content: content,
    });
    const saveNote = await NewNote.save();
    res.status(201).json(saveNote);
  } catch (error) {
    res.status(500).json({ message: "Erorr in Create" });
    console.error(error);
  }
}

export async function SpecificNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in SpecificNote" });
  }
}

export async function Delete(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in Delete" });
  }
}

export async function Update(req, res) {
  try {
    const { title, content } = req.body;
    const del = await Note.findByIdAndUpdate(req.params.id, {
      title: title,
      content: content,
    });
    if (!del) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(del);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erorr In Update Function" });
  }
}
