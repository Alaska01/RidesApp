import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  separatedData: [],
}

const generalDataSlice = createSlice({
  name: 'generalDataSlice',
  initialState,
  reducers: {
    generalFilteredData: (state, action) => {
      const data = action.payload;
      state.separatedData = data;
    },
  },

});

export const { generalFilteredData } = generalDataSlice.actions;
export default generalDataSlice.reducer;
