import { FC } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import formatCurrency from "../utils/formatCurrency";

interface Props {
  id: number;
  quantity: number;
}

const CartItem: FC<Props> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find(i => i.id === id);

  if (item == null) return null;

  return (
    <div className="flex items-center gap-3 w-full">
      <img src={item?.imgUrl} alt="" className="w-32 h-20 object-cover" />
      <div className="flex flex-grow justify-between items-center">
        <div>
          <span className="text-xl">{item?.name}</span>{" "}
          {quantity > 1 && (
            <span className="text-sm text-gray-500">x{quantity}</span>
          )}
          <div className="text-gray-500">{formatCurrency(item?.price)}</div>
        </div>
        <div>{formatCurrency(item?.price * quantity)}</div>
      </div>
      <button
        className="w-10 h-10 rounded text-xl bg-transparent text-red-400 border border-red-400 hover:bg-red-400 hover:text-white"
        onClick={e => {
          e.stopPropagation();
          removeFromCart(id);
        }}>
        &times;
      </button>
    </div>
  );
};

export default CartItem;
