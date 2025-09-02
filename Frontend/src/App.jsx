import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import Create from "./Pages/Create";
import NotesDetails from "./Pages/NotesDetails.jsx";

function App() {
  return (
    <main className="w-screen min-h-screen" data-theme="garden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<NotesDetails />} />
      </Routes>
    </main>
  );
}

export default App;
