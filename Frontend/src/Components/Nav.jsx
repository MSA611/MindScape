import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

function Nav() {
  return (
    <div className="navbar sticky z-20 top-0 flex bg-base-100 shadow-sm">
      <Link to="/create">
        <a className="btn btn-ghost text-xl">
          <PlusIcon />
          Create
        </a>
      </Link>
    </div>
  );
}

export default Nav;
