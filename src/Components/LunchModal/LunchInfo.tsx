import * as Dialog from '@radix-ui/react-dialog';

import { formatPrice } from '../../utils/formatValue';

interface LunchInfoProps {
  img: string;
  name: string;
  description: string;
  value: number;
}

export function LunchInfo({ description, img, name, value }: LunchInfoProps) {
  return (
    <>
      <div className="flex items-center justify-center bg-yellow-500 h-44 rounded-t-lg">
        <img src={img} alt={name} className="max-w-[90%] max-h-[90%]" />
      </div>
      <div className="p-6 w-full bg-gray-100 rounded-b-lg">
        <Dialog.Title className="font-semibold text-xl">{name}</Dialog.Title>
        <Dialog.Description className="text-base mt-2 block">
          {description}
        </Dialog.Description>
        <div className="flex items-center text-2xl justify-between mt-4">
          <span className="block text-[#6C6C80]">
            <strong>{formatPrice(value)}</strong>
          </span>
        </div>
      </div>
    </>
  );
}
