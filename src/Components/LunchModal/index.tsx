import * as Dialog from '@radix-ui/react-dialog';
import { Minus, NotePencil, Plus } from 'phosphor-react';
import { useState } from 'react';

import { data } from '../../services/api';
import { formatPrice } from '../../utils/formatValue';
import { ExtraItem } from './ExtraItem';
import { LunchInfo } from './LunchInfo';

interface LunchModalProps {
  lunchId: number;
}

export function LunchModal({ lunchId }: LunchModalProps) {
  const lunch = data.find((lunch) => lunch.id === lunchId);

  if (!lunch) {
    return null;
  }

  const [baconAmount, setBaconAmount] = useState(0);
  const [potatoAmount, setPotatoAmount] = useState(0);
  const [sauceAmount, setSauceAmount] = useState(0);
  const [sodaAmount, setSodaAmount] = useState(0);

  const [amount, setAmount] = useState(1);

  const total =
    (lunch.value +
      baconAmount * 3 +
      potatoAmount * 5 +
      sauceAmount * 1 +
      sodaAmount * 5) *
    amount;

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bottom-0 bg-white w-full max-w-3xl h-[90%] rounded-t-3xl text-gray-text flex justify-center py-8 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-11/12 sm:h-4/6 sm:rounded-lg">
        <div className="w-11/12 overscroll-auto overflow-y-auto md:flex md:items-start md:justify-between">
          <div className="md:w-1/2 md:mr-4">
            <LunchInfo
              img={lunch.img}
              name={lunch.name}
              description={lunch.description}
              value={lunch.value}
            />
          </div>

          <div className="md:w-1/2 md:ml-4">
            <h3 className="font-semibold text-xl mt-10 mb-4 md:mt-0">Adicionais</h3>

            <div className="space-y-2">
              <ExtraItem
                title="Bacon - R$3,00"
                amount={baconAmount}
                setValue={setBaconAmount}
              />

              <ExtraItem
                title="Batata 250g - R$5,00"
                amount={potatoAmount}
                setValue={setPotatoAmount}
              />

              <ExtraItem
                title="Molho branco - R$1,00"
                amount={sauceAmount}
                setValue={setSauceAmount}
              />

              <ExtraItem
                title="Refrigerante - R$5,00"
                amount={sodaAmount}
                setValue={setSodaAmount}
              />
            </div>

            <h3 className="font-semibold text-xl mt-10">Total do pedido</h3>

            <div className="flex items-center justify-between mt-3">
              <span className="block text-2xl text-[#39B100]">
                <strong>{formatPrice(total)}</strong>
              </span>

              <div className="flex items-center justify-center space-x-6 text-[#6C6C80] bg-gray-100 rounded-lg px-4 py-3">
                <button>
                  <Minus size={16} onClick={() => amount > 1 && setAmount(amount - 1)} />
                </button>
                <span>{amount}</span>
                <button onClick={() => setAmount(amount + 1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              // onClick={onClick}
              className="flex bg-green-500 w-full items-center justify-between rounded-lg p-2 mt-7"
            >
              <span className="text-white block font-semibold w-full text-center text-xl">
                Confirmar pedido
              </span>
              <div className="flex items-center justify-center bg-green-500 rounded p-1 md:bg-[#3CC73C]">
                <NotePencil weight="bold" className="text-white text-base" />
              </div>
            </button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
