import { atom, selector } from "recoil";

// Atom
export const countState = atom({
  key: "countState",
  default: 0
});

// Selector
export const alphaState = selector({
  key: "aplhaState",
  get: ({ get }) => get(countState) * 15,
  set: ({ set }, newValue) => set(countState, 0)
});

export const inputState = selector({
  key: "inputState",
  get: ({ get }) => get(countState),
  set: ({ set }, newValue) => set(countState, newValue)
});

// Atom => Equivalent au "state"

// Selector => état derivé, permet de construire des états dynamiques à partir des atoms
