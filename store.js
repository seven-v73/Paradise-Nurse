import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const storageKey = 'paradise-nursery-cart';

const loadCart = () => {
  try {
    const savedCart = localStorage.getItem(storageKey);
    return savedCart ? JSON.parse(savedCart) : undefined;
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: loadCart() || [],
    },
  },
});

store.subscribe(() => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(store.getState().cart.items));
  } catch {
    // The cart remains usable when browser storage is unavailable.
  }
});

export default store;
