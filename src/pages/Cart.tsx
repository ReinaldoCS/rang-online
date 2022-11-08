import { ItemCart } from '../components/ItemCart';
import { useCart } from '../hook/useCart';

export function Cart() {
  const { cart } = useCart();

  console.log(cart);

  return (
    <main className="flex flex-col items-center justify-between h-full w-full py-6 lg:flex-row lg:justify-center lg:items-start">
      <section className="flex flex-col space-y-4 items-center justify-start w-full lg:max-w-md">
        {cart.map((item) => (
          <ItemCart
            key={item.id}
            name={item.name}
            amount={item.amount}
            img={item.img}
            value={item.value}
            extra={item.extra}
          />
        ))}
      </section>

      <section className="bg-white w-11/12 mt-8 p-4 max-w-md rounded-lg text-gray-text lg:max-w-md lg:mt-0">
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
