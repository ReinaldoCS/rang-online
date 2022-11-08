import { MinusCircle, PlusCircle } from 'phosphor-react';

import { Product } from '../context/CartContext';
import { formatPrice } from '../utils/formatValue';

type ItemCart = Omit<Product, 'description' | 'id'>;

export function ItemCart({ name, img, value, amount, extra }: ItemCart) {
  return (
    <div className="relative bg-white flex items-start justify-start w-11/12 max-w-md p-4 rounded-lg">
      <span className="text-green-500 absolute bottom-4 right-4 md:text-2xl">
        <strong>{formatPrice(value * amount)}</strong>
      </span>
      <div className="flex items-center justify-center bg-orange-500 h-16 min-w-[4rem] p-2 rounded-lg">
        <img src={img} alt="Costelão" className="max-w-[90%] max-h-[90%]" />
      </div>

      <div className="pl-4 text-[#3D3D4D] w-full">
        <strong className="font-semibold text-md md:text-2xl">{name}</strong>
        {extra.map(
          (item) =>
            item.amount >= 1 && (
              <span
                key={item.name}
                className="text-xs block mt-2 md:text-base md:mt-4 line-clamp-2"
              >
                <strong>{item.amount}</strong> {item.name}
              </span>
            ),
        )}
      </div>

      <div className="flex flex-col text-gray-text items-center justify-between mb-8 md:mb-10">
        <button>
          <MinusCircle size={32} />
        </button>
        <input type="text" readOnly value={amount} className="w-8 text-center" />

        <button>
          <PlusCircle size={32} />
        </button>
      </div>
    </div>
  );
}
