import { FilterId } from '../types';

export const filters: { label: string; value: FilterId }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Pequeños', value: 'small' },
  { label: 'Medianos', value: 'medium' },
  { label: 'Grandes', value: 'large' },
  { label: 'Cachorros', value: 'puppy' },
  { label: 'Adultos', value: 'adult' },
];

export default filters;
