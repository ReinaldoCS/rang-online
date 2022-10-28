import { Bag } from './Bag';

export function Header() {
  return (
    <header className="bg-gray-500 flex items-start justify-center">
      <div className="flex items-start justify-between w-11/12 pt-8 pb-16 max-w-5xl sm:items-center md:pb-8">
        <img src="/logo.svg" alt="Rango" className="w-5/12 max-w-[168px]" />
        <Bag />
      </div>
    </header>
  );
}
