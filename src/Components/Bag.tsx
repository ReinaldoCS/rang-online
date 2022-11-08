import { Tote } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Bag() {
  return (
    <Link
      to="/carrinho"
      className="flex flex-col items-center justify-center sm:flex-row"
    >
      <Tote className="text-orange-500 w-8 h-8 sm:order-2 sm:pl-2 sm:w-14 sm:h-14" />
      <div className="sm:text-right">
        <strong className="text-orange-500 hidden sm:block">Meu carrinho</strong>
        <span className="text-gray-400 text-xs sm:text-sm">1 item</span>
      </div>
    </Link>
  );
}
