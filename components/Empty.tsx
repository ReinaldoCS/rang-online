import { WarningCircle } from 'phosphor-react';

interface EmptyProps {
  text: string;
}

export function Empty({ text }: EmptyProps) {
  return (
    <section className="flex flex-col items-center justify-center text-gray-400">
      <WarningCircle size={72} />
      <h2 className="text-xl mt-4">{text}</h2>
    </section>
  );
}
