import { createContext, useState } from 'react';

import { data } from '../services/api';

interface Product {
  id: number;
  name: string;
  description: string;
  value: number;
  amount: number;
  img: string;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartContextData {
  addProduct: (id: number) => void;
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

  const addProduct = (productId: number) => {
    // Verifica se o produto já esta no carrinho
    const productAlreadyExists = cart.find((product) => product.id === productId);

    if (productAlreadyExists) {
      const updatedAmountCartProduct = cart.map((product) => {
        return product.id === productId
          ? { ...product, amount: product.amount + 1 }
          : product;
      });

      setCart(updatedAmountCartProduct);

      localStorage.setItem('@RangoOnline:cart', JSON.stringify(updatedAmountCartProduct));

      alert(`${productAlreadyExists.name} foi adicionado ao carrinho`);
      return;
    }

    // verifica se o produto existe no "banco"
    const productData = data.find((product) => product.id === productId);

    if (!productData) {
      alert('produto não contrado');
      return;
    }

    const cartWithNewProduct = [...cart, { ...productData, amount: 1 }];

    setCart(cartWithNewProduct);

    localStorage.setItem('@RangoOnline:cart', JSON.stringify(cartWithNewProduct));

    alert(`${productData.name} novo adicionado ao carrinho`);

    return;
  };

  return <CartContext.Provider value={{ addProduct }}>{children}</CartContext.Provider>;
}
