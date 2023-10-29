import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

interface LayoutState {
  dir: 'ltr' | 'rtl';
  theme: 'light' | 'dark';
}

const slice = createSlice({
  name: 'user',
  initialState: { dir: 'ltr' } as LayoutState,
  reducers: {
    toggleDirection(state) {
      state.dir = state.dir === 'ltr' ? 'rtl' : 'ltr';
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleDirection, toggleTheme } = slice.actions;

export default slice.reducer;

export const selectLayout = (store: RootState) => store.layout;
