import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRidesData = createAsyncThunk(
  'ridesSlice/getRidesData',
  async () => {
    return await fetch('https://assessment.api.vweb.app/rides').then(res => res.json());
  }
);

const initialState = {
  status: "Pending",
  data: [],
  isLoading: true,
  ridesByStates: [],
  currentState: "",
  currentCity: "",
  citiesData: [],
  currentStateData: [],
  separatedData: []
}

const ridesSlice = createSlice({
  name: 'ridesSlice',
  initialState,
  reducers: {
    filterRidesByStates: (state, action) => {
      const stateListData = action.payload
      if (state.data.length > 0) {
        state.ridesByStates = stateListData.map((element) => {
          return element.state;
        }).filter((item, index, array) => array.indexOf(item) === index)
      }
    },

    filteredRidesByCities: (state) => {
      if (state.currentStateData > 0) {
        state.citiesData = state.currentStateData.map((item) => item.city)
      }
    },

    currentSelectedState: (state, action) => {
      const curState = action.payload
      state.currentState = curState;
    },

    currentSelectedStateData: (state) => {
      const data = state.data
      state.currentStateData = data.filter((item) => item.state == state.currentState)
    },

  },
  extraReducers: {
    [getRidesData.pending]: (state) => {
      state.status = 'Pending';
      state.isLoading = true;
    },

    [getRidesData.fulfilled]: (state, action) => {
      state.status = 'Fulfilled';
      state.isLoading = false;
      state.data = action.payload;
    },

    [getRidesData.rejected]: (state) => {
      state.status = 'Rejected';
      state.isLoading = false;
    }
  }
});

export const { filterRidesByStates, currentSelectedState,
  currentSelectedStateData, filteredRidesByCities } = ridesSlice.actions;
export default ridesSlice.reducer;
