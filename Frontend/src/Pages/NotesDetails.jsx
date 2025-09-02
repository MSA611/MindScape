import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/api";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";

function NotesDetails() {

  const { id } = useParams();

  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const nav = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/note/${id}`);
        setData(res.data);
      } catch (error) {
        toast.error("Error While Fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const Update = async () => {
    if (!data.title.trim() || !data.content.trim())
      return toast.error("Fill All The Details");

    try {
      setUpdating(true)
      await api.put(`/note/${id}`, {
        title: data.title,
        content: data.content,
      });
      toast.success("success ");
      nav("/");
    } catch (error) {
      toast.error("Error while Updating");
    }
    finally{
      setUpdating(false)
    }
  };

  const del = async () => {
    try {
      setDeleting(true)
      await api.delete(`/note/${id}`);
      toast.success("Deleted ");
      nav("/");
    } catch (error) {
      toast.error("SomeThing Went Wrong While Deleting");
    }
    finally{
      setDeleting(false)
    }
  };

  return (
    <main className="w-screen h-screen">
      {loading && <Loading />}

      <div className="flex absolute left-1/2 top-1/2 -translate-1/2 card bg-base-100 w-96 shadow-sm">
        <Link to="/">
          <button className="btn btn-secondary">
            <ArrowLeft />
            Back
          </button>
        </Link>

        <div className="card-body">
          <h2 className="card-">Title</h2>

          <p>
            <input
              type="text"
              value={data.title}
              className="input input-lg"
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </p>

          <h2 className="card-">Content</h2>

          <p>
            <textarea
              className="textarea textarea-md"
              value={data.content}
              onChange={(e) =>
                setData((prev) => ({ ...prev, content: e.target.value }))
              }
            ></textarea>
          </p>

          <div className="card-actions justify-end">
            <button
              disabled={updating}
              className="btn btn-primary"
              onClick={Update}
            >
              {updating ? "Updating..." : "Update"}
            </button>

            <button
              disabled={deleting}
              className="btn btn-secondary"
              onClick={del}
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default NotesDetails;
