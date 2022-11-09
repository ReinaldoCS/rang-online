import { MagnifyingGlass } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';

export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-start justify-center -translate-y-6 w-11/12 max-w-sm">
      <div className="w-full relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 text-gray-400">
          <MagnifyingGlass size={24} weight="bold" />
        </div>
        <input
          type="text"
          placeholder="Qual comida você procura?"
          className="bg-white rounded-lg w-full pl-12 p-2.5 block text-gray-500 focus:outline-orange-500"
          {...props}
        />
      </div>
    </div>
  );
}
