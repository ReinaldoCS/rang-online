import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useState } from 'react';

import { data } from '../services/api';
import { Card } from './Card';
import { SearchInput } from './SearchInput';

export function LunchesList() {
  const [search, setSearch] = useState('');

  const [parent] = useAutoAnimate<HTMLUListElement>(/* optional config */);

  // Filtra busta considerando o nome e a descrição do lanche
  const filterLunches = data.filter(
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
        className="flex flex-col items-center justify-center max-w-5xl mb-10 sm:grid sm:grid-cols-[20rem_repeat(auto-fill,_20rem)] sm:w-11/12 sm:gap-x-4 sm:gap-2 md:gap-8 md:my-16"
      >
        {filterLunches.map((lunch) => (
          <Card
            key={lunch.id}
            id={lunch.id}
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
