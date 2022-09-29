import { createContext, FC, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface ShoppingCartContext {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  isOpen: boolean;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        isOpen,
        cartItems,
        cartQuantity,
      }}>
      <main className="relative">{children}</main>
    </ShoppingCartContext.Provider>
  );
};

export { useShoppingCart, ShoppingCartProvider };
