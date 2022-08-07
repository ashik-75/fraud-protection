import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbars">
      <div className="container">
        <div className="row align-items-center g-0">
          <div className="cols-menu d-flex align-items-center">
            <Link to={"/"} className="navbar-brand">
              <img src="src/img/logo.svg" alt="" width="152" height="28" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
