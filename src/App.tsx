import './index.css';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { LunchesList } from './Components/LunchesList';

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col flex-1">
      <Header />
      <LunchesList />
      <Footer />
    </div>
  );
}
