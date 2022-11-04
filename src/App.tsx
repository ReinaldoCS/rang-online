import './index.css';

import { Cart } from './Components/Cart';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { LunchesList } from './Components/LunchesList';
import { CartProvider } from './context/CartContext';

export function App() {
  return (
    <CartProvider>
      <div className="w-screen h-screen flex flex-col flex-1">
        <Header />
        <LunchesList />
        {/* <Cart /> */}
        <Footer />
      </div>
    </CartProvider>
  );
}
