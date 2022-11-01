import { MinusCircle, PlusCircle } from 'phosphor-react';

export function ItemCart() {
  return (
    <div className="relative bg-white flex items-start justify-start w-11/12 max-w-md p-4 rounded-lg">
      <span className="text-green-500 absolute bottom-4 right-4 md:text-2xl">
        <strong>R$19.90</strong>
      </span>
      <div className="flex items-center justify-center bg-orange-500 h-16 min-w-[4rem] p-2 rounded-lg">
        <img src="/img/costelao.png" alt="Costelão" className="max-w-[90%] max-h-[90%]" />
      </div>

      <div className="pl-4 text-[#3D3D4D] w-full">
        <strong className="font-semibold text-md md:text-2xl">Costelão</strong>
        <span className="text-xs block mt-2 md:text-base md:mt-4 line-clamp-2">
          <strong>1</strong> Bacon
        </span>
        {/* <span className="text-xs block mt-2 md:text-base md:mt-4 line-clamp-2">
              <strong>1</strong> Molho branco
            </span>
            <span className="text-xs block mt-2 md:text-base md:mt-4 line-clamp-2">
              <strong>1</strong> Refigerante
            </span>
            <span className="text-xs block mt-2 md:text-base md:mt-4 line-clamp-2">
              <strong>2</strong> Batata 250g
            </span> */}
      </div>

      <div className="flex flex-col items-center justify-between mb-8 md:mb-10">
        <button>
          <MinusCircle size={32} />
        </button>
        <input type="text" readOnly value={1} className="w-8 text-center" />

        <button>
          <PlusCircle size={32} />
        </button>
      </div>
    </div>
  );
}
