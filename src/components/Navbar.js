import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="bg-primary-subtle m-auto mt-3 rounded-4"
        style={{ height: "60px", width: "90%" }}
      >
        <div className="menu w-100 h-100 d-flex justify-content-center align-items-center position-relative">
          <ol className="m-0 p-0 d-flex gap-4 fs-5 fw-semibold">
            <li>
              <Link to="/" className="text-dark text-decoration-none">
                Home
              </Link>
            </li>
            <li>Contact</li>
            <li>About</li>
          </ol>
          <Link to="/cart">
            <button className="cart position-absolute border-0 rounded-circle bg-dark text-white">
              <ShoppingCartIcon />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
