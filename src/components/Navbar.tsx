import { FC } from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar: FC = () => {
  return (
    <nav className="sticky bg-white shadow mb-3 py-3">
      <Container>
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 text-lg">
            <li>
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/store">
                <a>Store</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a>About</a>
              </NavLink>
            </li>
          </ul>

          <button className="relative w-12 h-12 p-2 border border-blue-600 rounded-full hover:bg-blue-600 group">
            <ShoppingCartIcon className="w-8 h-8 text-blue-600 group-hover:text-white" />
            <div className="absolute bottom-0 right-0 rounded-full bg-red-600 flex justify-center items-center text-white w-6 h-6 translate-x-1/4 translate-y-1/4">
              3
            </div>
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
