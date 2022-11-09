import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { data } from '../services/api';

export interface Product {
  id: string;
  orderId: string;
  name: string;
  description: string;
  value: number;
  amount: number;
  img: string;
  extra: Extra[];
}

export interface AddProductProps {
  id: string;
  amount: number;
  extra: Extra[];
}

interface Extra {
  name: string;
  amount: number;
  value: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartContextData {
  addProduct: (props: AddProductProps) => void;
  addAmount: (orderId: string) => void;
  removeProduct: (orderId: string) => void;
  cart: Product[];
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RangoOnline:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = ({ id, amount, extra }: AddProductProps) => {
    // Verifica se o produto já esta no carrinho
    const productAlreadyExists = cart.find((product) => product.id === id);

    if (
      productAlreadyExists &&
      JSON.stringify(productAlreadyExists.extra) === JSON.stringify(extra)
    ) {
      const updatedAmountCartProduct = cart.map((product) => {
        return product.id === id
          ? { ...product, amount: product.amount + amount }
          : product;
      });

      setCart(updatedAmountCartProduct);

      localStorage.setItem('@RangoOnline:cart', JSON.stringify(updatedAmountCartProduct));

      alert(`${productAlreadyExists.name} foi adicionado ao carrinho`);
      return;
    }

    // verifica se o produto existe no "banco"
    const productData = data.find((product) => product.id === id);

    if (!productData) {
      alert('produto não contrado');
      return;
    }

    const cartWithNewProduct = [
      ...cart,
      { ...productData, extra, amount, orderId: uuidv4() },
    ];

    setCart(cartWithNewProduct);

    localStorage.setItem('@RangoOnline:cart', JSON.stringify(cartWithNewProduct));

    alert(`${productData.name} novo adicionado ao carrinho`);

    return;
  };

  const addAmount = (orderId: string) => {
    // const order = cart.find((product) => product.orderId === orderId);

    const updatedAmountOrder = cart.map((product) => {
      return product.orderId === orderId
        ? { ...product, amount: product.amount + 1 }
        : product;
    });

    setCart(updatedAmountOrder);

    localStorage.setItem('@RangoOnline:cart', JSON.stringify(updatedAmountOrder));
  };

  const removeProduct = (orderId: string) => {
    const order = cart.find((product) => product.orderId === orderId);

    if (!order) {
      return;
    }

    if (order.amount > 1) {
      const updatedAmountOrder = cart.map((product) => {
        return product.orderId === orderId
          ? { ...product, amount: product.amount - 1 }
          : product;
      });
      setCart(updatedAmountOrder);

      localStorage.setItem('@RangoOnline:cart', JSON.stringify(updatedAmountOrder));

      return;
    }

    const filteredCart = cart.filter((order) => order.orderId !== orderId);

    setCart(filteredCart);
    localStorage.setItem('@RangoOnline:cart', JSON.stringify(filteredCart));
  };

  return (
    <CartContext.Provider value={{ addProduct, addAmount, removeProduct, cart }}>
      {children}
    </CartContext.Provider>
  );
}
