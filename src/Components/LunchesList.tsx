import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useState } from 'react';

import { Card, ICardProps } from './Card';
import { SearchInput } from './SearchInput';

export function LunchesList() {
  const [search, setSearch] = useState('');

  const [parent] = useAutoAnimate<HTMLUListElement>(/* optional config */);

  // Filtra busta considerando o nome e a descrição do lanche
  const filterLunches = lunches.filter(
    (lunch) =>
      lunch.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1 ||
      lunch.description.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1,
  );

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <SearchInput onChange={handleChangeSearch} value={search} />

      <ul
        ref={parent}
        className="flex flex-col items-center justify-center max-w-5xl sm:grid sm:grid-cols-[20rem_repeat(auto-fill,_20rem)] sm:w-11/12 sm:gap-x-4 sm:gap-2 md:gap-8 md:mt-16"
      >
        {filterLunches.map((lunch) => (
          <Card
            key={lunch.name}
            name={lunch.name}
            description={lunch.description}
            value={lunch.value}
            img={lunch.img}
          />
        ))}
      </ul>
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
