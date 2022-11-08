import { Minus, Plus } from 'phosphor-react';

interface ExtraItemProps {
  title: string;
  amount: number;
  setValue: (number: number) => void;
}

export function ExtraItem({ title, amount, setValue }: ExtraItemProps) {
  return (
    <div className="bg-gray-100 rounded-lg text-[#6C6C80] px-4 py-3 flex items-center justify-between">
      <span>{title}</span>
      <div className="flex items-center justify-center space-x-6">
        <button
          className={amount < 1 ? 'cursor-not-allowed' : ''}
          onClick={() => amount > 0 && setValue(amount - 1)}
          disabled={amount < 1}
        >
          <Minus size={16} />
        </button>
        <span>{amount}</span>
        <button onClick={() => setValue(amount + 1)}>
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
