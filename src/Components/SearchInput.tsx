import { MagnifyingGlass } from 'phosphor-react';

export function SearchInput() {
  return (
    <div className="flex items-start justify-center -translate-y-6">
      <div className="w-11/12 max-w-sm relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 text-gray-400">
          <MagnifyingGlass size={24} weight="bold" />
        </div>
        <input
          type="text"
          placeholder="Qual comida você procura?"
          className="bg-white rounded-lg w-full pl-12 p-2.5 block text-gray-500 focus:border-orange-500"
        />
      </div>
    </div>
  );
}
