import { Pet } from '../types';

export const homePets: Pet[] = [
  {
    name: 'Mika',
    breed: 'Pastor',
    age: '1 año',
    sex: 'Macho',
    size: 'Mediano',
    description: 'Dulce, juguetón y listo para encontrar una familia.',
    img: 'https://i.pinimg.com/736x/e2/68/ca/e268ca7f01ac1be3c6149a5a905e5c4b.jpg',
  },
  {
    name: 'Riley',
    breed: 'Golden',
    age: '5 meses',
    sex: 'Hembra',
    size: 'Grande',
    description: 'Cariñosa, tranquila y perfecta para un hogar amoroso.',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Luna',
    breed: 'Mestiza',
    age: '2 años',
    sex: 'Hembra',
    size: 'Pequeño',
    description: 'Muy obediente y en busca de una segunda oportunidad.',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
];

export const filterPets = [
  { name: 'Mika', size: 'medium' },
  { name: 'Riley', size: 'large' },
  { name: 'Luna', size: 'small' },
  { name: 'Toby', size: 'puppy' },
  { name: 'Kira', size: 'adult' },
  { name: 'Milo', size: 'small' },
  { name: 'Bruno', size: 'medium' },
];