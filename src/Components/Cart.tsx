import { ItemCart } from './ItemCart';

export function Cart() {
  return (
    <main className="flex flex-col items-center justify-between h-full w-full py-6 lg:flex-row lg:justify-center">
      <section className="flex flex-col items-center justify-start w-full lg:max-w-md">
        <ItemCart />
      </section>

      <section className="bg-white w-11/12 p-4 max-w-md rounded-lg lg:max-w-md">
        <div className="flex items-baseline justify-between">
          <strong className="font-semibold text-md md:text-2xl">Valor total</strong>
          <span>R$20,00</span>
        </div>

        <button className="bg-green-500 text-center text-xl font-semibold text-white p-2 rounded-lg w-full mt-6">
          Confirmar pedido
        </button>
      </section>
    </main>
  );
}
