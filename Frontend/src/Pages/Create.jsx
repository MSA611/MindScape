import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../lib/api";
import toast from "react-hot-toast";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [creating, setCreating] = useState(false);

  const nav = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    if (!title || !content) return toast.error("Fill All The Details");
    try {
      setCreating(true);
      await api.post("/note", {
        title: title,
        content: content,
      });
      toast.success("successFully Created");
      nav("/");
    } catch (error) {
      toast.error("Something went wrong while creating");
      console.error(error);
    } finally {
      setCreating(false);
    }
  }

  return (

    <div className="  flex absolute left-1/2 top-1/2 -translate-1/2">

      <form onSubmit={handleForm}>

        <div className="card card-dash bg-base-100 w-96">

          <div className="card-actions ">

            <Link to="/">

              <button className="btn btn-secondary">

                <ArrowLeft />

                Back

              </button>

            </Link>

          </div>


          <div className="card-body">

            <h2 className="card-title">Title</h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
              className="input"
            />

            <h2 className="card-title">Content</h2>

            <p>

              <textarea
                placeholder="Content..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className="textarea textarea-lg"
              ></textarea>

            </p>

            <div className="card-actions justify-end">

              <button
                disabled={creating}
                className="btn btn-primary"
                type="submit"
              >
                {creating ? "Creating..." : "Create"}
              </button>

            </div>

          </div>

        </div>

      </form>

    </div>
  );
}

export default Create;
