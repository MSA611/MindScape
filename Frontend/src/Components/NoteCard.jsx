import { Link } from "react-router";
import api from "../lib/api";
import toast from "react-hot-toast";
import { useState } from "react";

function NoteCard({ data, setData }) {

  const [deleting,setDeleting]=useState(false)

  const Delete = async (e, id) => {

    e.preventDefault();

    try {
      setDeleting(true)
      await api.delete(`/note/${id}`);
      toast.success("Deleted successFully");
      setData((data) => data.filter((data) => data._id !== id));
    } catch (error) {
      toast.error("SomeThing Went Wrong");
    }finally{
      setDeleting(false)
    }
  };

  return (
    <>
      <Link to={`/note/${data._id}`}>

        <div className="card w-96 bg-base-100 card-xl shadow-sm">

          <div className="card-body">

            <h2 className="card-title">{data.title}</h2>
            <p>{data.content}</p>
          </div>

          <footer className="m-3 items-center flex justify-between">
            
            <div>
              {new Date(data.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>

            <button
              className="btn btn-primary"
              onClick={(e) => Delete(e, data._id)}
            >

              {
                deleting ? "Deleting...":"Delete"
              }

            </button>

          </footer>

        </div>

      </Link>

    </>
  );
}

export default NoteCard;
