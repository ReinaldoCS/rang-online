import { Card, ICardProps } from './Card';

export function LunchesList() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-5xl sm:grid sm:grid-cols-[20rem_repeat(auto-fill,_20rem)] sm:w-11/12 sm:gap-x-4 sm:gap-2 md:gap-8">
        {lunches.map((lunch) => (
          <Card
            key={lunch.name}
            name={lunch.name}
            description={lunch.description}
            value={lunch.value}
            img={lunch.img}
          />
        ))}
      </div>
    </section>
  );
}

const lunches: ICardProps[] = [
  {
    name: 'Costelão',
    description: 'Pão brioche, cebola crispy, tomate, costela, bacon e alface',
    value: 26.99,
    img: '/img/costelao.png',
  },
  {
    name: 'Double bacon',
    description:
      'Pão brioche, 2 camadas macias de bacon , 2 hambúrgueres 100g, queijo cheddar e barbecue',
    value: 24.99,
    img: '/img/double_bacon.png',
  },
  {
    name: 'Cremosinho',
    description:
      'Pão australiano, bacon maionese da casa, queijo cheddar, 1 hambúrguer 200g, e cebola caramelizada',
    value: 23.99,
    img: '/img/cremosinho.png',
  },
  {
    name: 'Frango Cremoso',
    description:
      'Pão brioche, frango empanado, maionese a moda da casa, hambúrguer, cebola roxa, picles e alface',
    value: 20.99,
    img: '/img/frango_cremoso.png',
  },
  {
    name: 'Gourmet',
    description:
      'Pão crocante, molho rosé 2 hambúrgueres smash, cebola, tomate, picles e alface',
    value: 27.99,
    img: '/img/gourmet.png',
  },
  {
    name: 'Simples',
    description:
      'Pão crocante, molho rosé 2 hambúrgueres smash, cebola, tomate, picles e alface',
    value: 19.9,
    img: '/img/simples.png',
  },
];
