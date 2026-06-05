export type FilterId = 'all' | 'small' | 'medium' | 'large' | 'puppy' | 'adult';

export type Pet = {
  name: string;
  breed?: string;
  age?: string;
  sex?: string;
  size: string;
  description?: string;
  img?: string;
};