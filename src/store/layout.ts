import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

interface LayoutState {
  dir: 'ltr' | 'rtl';
  theme: 'light' | 'dark' | 'auto';
}

const slice = createSlice({
  name: 'user',
  initialState: { dir: 'ltr' } as LayoutState,
  reducers: {
    toggleDirection(state) {
      state.dir = state.dir === 'ltr' ? 'rtl' : 'ltr';
    },
    toggleTheme(state, action) {
      console.log('toggleTheme', action.payload);

      state.theme = action.payload;
    },
  },
});

export const { toggleDirection, toggleTheme } = slice.actions;

export default slice.reducer;

export const selectLayout = (store: RootState) => store.layout;
