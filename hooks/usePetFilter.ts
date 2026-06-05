import { useMemo, useState } from 'react';
import { FilterId } from '../types';
import { allPets } from '../data/pets';

export function usePetFilter(initial: FilterId = 'all') {
  const [selected, setSelected] = useState<FilterId>(initial);

  const filtered = useMemo(() => {
    if (selected === 'all') return allPets;
    return allPets.filter((p) => p.size === selected);
  }, [selected]);

  return { selected, setSelected, filtered } as const;
}

export default usePetFilter;
