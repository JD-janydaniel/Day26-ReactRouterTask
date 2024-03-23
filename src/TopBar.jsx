import { Link } from "react-router-dom";
function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  border-bottom shadow">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/fullstack"} className="nav-link">
                FULLSTACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/datascience"} className="nav-link">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cybersecurity"} className="nav-link">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/career"} className="nav-link" href="#">
                CAREER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
