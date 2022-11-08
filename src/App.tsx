import './index.css';

import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LunchesList } from './components/LunchesList';
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
