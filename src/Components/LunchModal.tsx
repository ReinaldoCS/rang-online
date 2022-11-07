import * as Dialog from '@radix-ui/react-dialog';
import { Minus, Plus } from 'phosphor-react';

import { data } from '../services/api';
import { formatPrice } from '../utils/formatValue';

interface LunchModalProps {
  lunchId: number;
}

export function LunchModal({ lunchId }: LunchModalProps) {
  const lunch = data.find((lunch) => lunch.id === lunchId);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bottom-0 bg-white w-full h-[90%] rounded-t-3xl text-gray-text flex justify-center py-8">
        <div className="w-11/12 overscroll-auto overflow-y-auto">
          <div className="flex items-center justify-center bg-yellow-500 h-44 rounded-t-lg">
            <img src={lunch?.img} alt={lunch?.name} className="max-w-[90%] max-h-[90%]" />
          </div>
          <div className="p-6 w-full bg-gray-100 rounded-b-lg">
            <Dialog.Title className="font-semibold text-xl">{lunch?.name}</Dialog.Title>
            <Dialog.Description className="text-base mt-2 block">
              {lunch?.description}
            </Dialog.Description>
            <div className="flex items-center text-2xl justify-between mt-4">
              <span className="block text-[#6C6C80]">
                <strong>{lunch?.value && formatPrice(lunch.value)}</strong>
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mt-10">Adicionais</h3>

            <div className="bg-gray-100 rounded-lg text-[#6C6C80] px-4 py-3 flex items-center justify-between">
              <span>Bacon</span>
              <div className="flex items-center justify-center space-x-6">
                <button>
                  <Minus size={16} />
                </button>
                <span>{1}</span>
                <button>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mt-10">Total do pedido</h3>

              <div className="flex items-center justify-between mt-3">
                <span className="block text-2xl text-[#39B100]">
                  <strong>{lunch?.value && formatPrice(lunch.value)}</strong>
                </span>

                <div className="flex items-center justify-center space-x-6 text-[#6C6C80] bg-gray-100 rounded-lg px-4 py-3">
                  <button>
                    <Minus size={16} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <button>Confirmar pedido</button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
