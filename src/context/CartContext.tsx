import { createContext, useState } from 'react';

import { data } from '../services/api';

interface Product {
  id: number;
  name: string;
  description: string;
  value: number;
  amount: number;
  img: string;
  extra: Extra[];
}

interface Extra {
  name: string;
  amount: number;
  value: number;
}

export interface AddProductProps {
  id: number;
  amount: number;
  extra: Extra[];
}

interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartContextData {
  addProduct: (props: AddProductProps) => void;
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

    const cartWithNewProduct = [...cart, { ...productData, extra, amount }];

    setCart(cartWithNewProduct);

    localStorage.setItem('@RangoOnline:cart', JSON.stringify(cartWithNewProduct));

    alert(`${productData.name} novo adicionado ao carrinho`);

    return;
  };

  return <CartContext.Provider value={{ addProduct }}>{children}</CartContext.Provider>;
}
