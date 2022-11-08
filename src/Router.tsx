import { Route, Routes } from 'react-router-dom';

import { Cart } from './components/Cart';
import { LunchesList } from './components/LunchesList';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LunchesList />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}
