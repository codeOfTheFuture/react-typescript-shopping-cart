import { FC } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utils/formatCurrency";
import storeItems from "../data/items.json";
import CartItem from "./CartItem";

const ShoppingCart: FC = () => {
  const { isOpen, cartItems, closeCart } = useShoppingCart();

  return (
    <div
      className={`absolute top-0 right-0 h-screen p-5 w-5/6 md:w-[600px] xl:w-[700px] z-10 bg-white transition-transform duration-150 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-[100%]"
      }`}>
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Cart</h2>
        <button
          className="text-4xl text-gray-500 hover:scale-125 transition-transform duration-150 ease-linear"
          onClick={closeCart}>
          &times;
        </button>
      </header>

      {cartItems.length === 0 && (
        <div className="flex justify-center items-center h-full text-xl">
          <span>Your cart is empty</span>
        </div>
      )}

      <div className="flex flex-col gap-5 mt-5">
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="flex justify-end w-full mt-3 text-2xl font-bold">
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find(i => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
