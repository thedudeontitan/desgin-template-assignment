import { create } from "zustand";
import getProduct from "../_libs/getProduct";

type StoreState = {
  cart: Product[];
};

const initialState: StoreState = {
  cart: [],
};

interface Store extends StoreState {
  add: (id: string) => void;
  remove: (id: string) => void;
  removeAll: () => void;
}

export const store = create<Store>((set, get) => ({
  ...initialState,
  add: async (id) => {
    try {
      const product = await getProduct(id);
      set((state) => ({
        ...state,
        cart: [...state.cart, product],
      }));
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  },
  remove: (id) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== id),
    }));
  },
  removeAll: () => set(initialState),
}));
