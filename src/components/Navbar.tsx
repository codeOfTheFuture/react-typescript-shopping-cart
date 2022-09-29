import { FC, useRef } from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useClickOutside from "../hooks/useClickOutside";
import ShoppingCart from "./ShoppingCart";

const Navbar: FC = () => {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useClickOutside(cartRef, closeCart);

  return (
    <nav className="sticky h-20 flex items-center bg-white shadow mb-3">
      <Container>
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 text-lg">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/store">Store</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>

          <div ref={cartRef}>
            <button
              className="relative w-12 h-12 p-2 border border-blue-600 rounded-full hover:bg-blue-600 group transition-transform duration-150 ease-linear"
              onClick={openCart}>
              <ShoppingCartIcon className="w-8 h-8 text-blue-600 group-hover:text-white" />
              {cartQuantity > 0 && (
                <div
                  className="absolute bottom-0 right-0 rounded-full
              bg-red-600 flex justify-center items-center text-white w-6 h-6 translate-x-1/4 translate-y-1/4">
                  {cartQuantity}
                </div>
              )}
            </button>
            <ShoppingCart />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
