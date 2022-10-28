import { Plus } from 'phosphor-react';

export interface ICardProps {
  name: string;
  description: string;
  value: number;
  img: string;
}

export function Card({ name, description, value, img }: ICardProps) {
  return (
    <div className="w-11/12 h-32 bg-white flex items-center justify-start rounded-lg mt-4 md:w-80 md:flex-col md:h-full md:mt-0">
      <div className="flex items-center justify-center bg-yellow-500 bg rounded-l-lg h-32 min-w-[8rem] p-2 md:rounded-t-lg md:rounded-bl-none md:min-w-[20rem] md:h-48">
        <img src={img} alt={name} className="max-w-[90%] max-h-[90%]" />
      </div>
      <div className="px-4 py-2 text-[#3D3D4D] w-full md:p-8">
        <strong className="font-semibold text-md md:text-2xl">{name}</strong>
        <span className="text-xs block mt-2 md:text-base md:mt-4 line-clamp-2">
          {description}
        </span>
        <div className="flex items-center justify-between mt-2 md:flex-col md:items-start md:mt-4">
          <span className="block text-green-500 md:text-2xl">
            R$ <strong>{value}</strong>
          </span>

          <button className="md:flex md:bg-green-500 md:w-full md:items-center md:justify-between md:rounded-lg md:p-2 md:mt-7">
            <span className="hidden text-white md:block md:font-semibold md:w-full md:text-center md:text-xl">
              Adicionar
            </span>
            <div className="flex items-center justify-center bg-green-500 rounded p-1 md:bg-[#3CC73C]">
              <Plus weight="bold" className="text-white text-base" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
