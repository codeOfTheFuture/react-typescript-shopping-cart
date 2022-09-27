import { FC } from "react";
import formatCurrency from "../utils/formatCurrency";

interface Props {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: FC<Props> = ({ id, name, price, imgUrl }) => {
  const quantity: number = 0;

  return (
    <div className="rounded my-1 h-full">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-64 object-cover rounded"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-baseline mb-4 p-4">
          <span className="text-3xl font-semibold">{name}</span>
          <span className="text-2xl ml-2 text-slate-500">
            {formatCurrency(price)}
          </span>
        </div>

        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center p-3">
              + Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center gap-2">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white text-center text-xl font-semibold rounded">
                  -
                </button>
                <div>
                  <span className="text-2xl">{quantity}</span> in cart
                </div>
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white text-center text-xl font-semibold rounded">
                  +
                </button>
              </div>
              <button className="w-20 h-10 bg-red-600 hover:bg-red-700 text-white text-center font-semibold rounded">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
