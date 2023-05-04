import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/todos">Task</Link>
      &nbsp; | &nbsp;
      <Link to="/todos/new">New Task</Link> <span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
