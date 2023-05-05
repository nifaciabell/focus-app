import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <span>Welcome, {user.name}</span> 
      &nbsp; | &nbsp;
      <Link to="/todos"> All Task</Link>
      &nbsp; | &nbsp;
      <Link to="/todos/new">New Task</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
