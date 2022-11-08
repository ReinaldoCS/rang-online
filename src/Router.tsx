import { Route, Routes } from 'react-router-dom';

import { Cart } from './pages/Cart';
import { LunchesList } from './pages/LunchesList';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LunchesList />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}
