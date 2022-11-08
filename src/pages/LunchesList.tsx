import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Root as DialogRoot } from '@radix-ui/react-dialog';
import React, { useState } from 'react';

import { Card } from '../components/Card';
import { LunchModal } from '../components/LunchModal';
import { SearchInput } from '../components/SearchInput';
import { data } from '../services/api';

export function LunchesList() {
  const [search, setSearch] = useState('');

  const [lunchId, setLunchId] = useState<string>('');

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

      <DialogRoot>
        <ul
          ref={parent}
          className="flex flex-col items-center justify-center max-w-5xl mb-10 sm:grid sm:grid-cols-[20rem_repeat(auto-fill,_20rem)] sm:w-11/12 sm:gap-x-4 sm:gap-2 md:gap-8 md:my-16"
        >
          {filterLunches.map((lunch) => (
            <Card
              key={lunch.id}
              name={lunch.name}
              description={lunch.description}
              value={lunch.value}
              img={lunch.img}
              onClick={() => setLunchId(lunch.id)}
            />
          ))}
        </ul>

        <LunchModal lunchId={lunchId} />
      </DialogRoot>
    </section>
  );
}
