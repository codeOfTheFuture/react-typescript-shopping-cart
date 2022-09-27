import { FC } from "react";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold my-3">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {storeItems.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Store;
