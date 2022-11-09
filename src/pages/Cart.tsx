import { Empty } from '../components/Empty';
import { ItemCart } from '../components/ItemCart';
import { useCart } from '../hook/useCart';
import { formatPrice } from '../utils/formatValue';

export function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sumTotal, product) => {
    const totalExtra = product.extra.reduce((sumTotal, extra) => {
      return (sumTotal += extra.value * extra.amount);
    }, 0);
    return (sumTotal += (product.value + totalExtra) * product.amount);
  }, 0);

  return (
    <main className="flex flex-col items-center justify-between h-full w-full my-8 lg:flex-row lg:justify-center lg:items-start">
      {cart.length > 0 ? (
        <>
          <section className="flex flex-col space-y-4 items-center justify-start w-full lg:max-w-md">
            {cart.map((item) => (
              <ItemCart
                key={item.orderId}
                orderId={item.orderId}
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
              <span className="font-bold text-lg md:text-2xl text-[#39B100]">
                {formatPrice(total)}
              </span>
            </div>

            <button className="bg-green-500 text-center text-xl font-semibold text-white p-2 rounded-lg w-full mt-6">
              Confirmar pedido
            </button>
          </section>
        </>
      ) : (
        <Empty text="O seu carrinho esta vázio" />
      )}
    </main>
  );
}
