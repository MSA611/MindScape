import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import api from "../lib/api";
import Nav from "../Components/Nav";
import NoteCard from "../Components/NoteCard";

function HomePage() {

  const [loading, setLoading] = useState(true);


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/note");
        setData(res.data);
      } catch (error) {
        toast.error("Something Went Wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (

    <div className="w-screen ">
      {loading && <Loading />}

      <Nav />

      {data.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
          {data.map((data) => (
            <NoteCard data={data} setData={setData} key={data._id} />
          ))}

        </div>
      ) : null}

    </div>

  );
}

export default HomePage;
