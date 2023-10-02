import { createContext } from 'react';

export type TContextView = {
  view: string,
  setView: (value: string) => void,
}

export const Context = createContext<TContextView>({
  view: 'till',
  setView: () => {},
});
