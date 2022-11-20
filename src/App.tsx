// import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Footer } from './components/Footer/Index';
import { Header } from './components/Header';
import { CartProvider } from './context/CartContext';
import { Router } from './Router';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="w-[100%] h-screen flex flex-col flex-1">
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>

      <GlobalStyle />
    </CartProvider>
  );
}
