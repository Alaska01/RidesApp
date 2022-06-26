import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk(
  'userSlice/getUserData',
  async () => {
    return await fetch('https://assessment.api.vweb.app/user').then(res => res.json());
  }
);

const initialState = {
  status: "Pending",
  userdata: [],
  isLoading: true,
  userDetails: [],
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.status = 'Pending';
      state.isLoading = true;
    },

    [getUserData.fulfilled]: (state, action) => {
      state.status = 'Fulfilled';
      state.isLoading = false;
      state.userdata = action.payload;
    },

    [getUserData.rejected]: (state) => {
      state.status = 'Rejected';
      state.isLoading = false;
    }
  }
});

// export const { filterStatesRides } = ridesSlice.actions;
export default userSlice.reducer;
