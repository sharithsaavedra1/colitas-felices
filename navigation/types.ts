import { Pet } from '../types';

export type RootStackParamList = {
  Main: undefined;
  Detalle: Pet | undefined;
};

export default RootStackParamList;
