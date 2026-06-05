import { FilterId } from './filter';

export type Pet = {
  name: string;
  breed?: string;
  age?: string;
  sex?: string;
  size: FilterId | string;
  description?: string;
  img?: string;
};

export default Pet;
