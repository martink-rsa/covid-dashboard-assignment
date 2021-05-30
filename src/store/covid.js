import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sortCovidData, getCountries, fetchData } from '../utils/utils';
import { dummyData } from '../components/Dashboard/data';

const initialState = {
  currentCountry: '',
  countries: [],
  data: [],
  status: 'idle',
  currentStat: 'deaths',
  isLoaded: false,
};

// Debug switches out API data with a local file
const debug = false;

// Value returned becomes the `fulfilled` action payload
export const getData = createAsyncThunk('covid/getData', async () => {
  let response;
  if (debug) {
    response = dummyData;
  } else {
    response = await fetchData('https://covid19.mathdro.id/api/recovered');
  }
  const sortedData = sortCovidData(response);
  const countries = getCountries(sortedData);
  return { data: sortedData, countries };
});

export const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCurrentStat: (state, action) => {
      state.currentStat = action.payload;
    },
    setCountry: (state, action) => {
      console.log('Set country: ', action.payload);
      state.currentCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoaded = true;
        state.data = action.payload.data;
        state.countries = action.payload.countries;
        state.currentCountry =
          action.payload.data[action.payload.countries[0].iso3].iso3;
      });
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setCountry,
  setCurrentStat,
  nextStat,
} = covidSlice.actions;

// Selectors
export const selectData = (state) => state.covid.data;
export const selectStatus = (state) => state.covid.status;
export const selectCountries = (state) => state.covid.countries;
export const selectCountry = (state) =>
  state.covid.data[state.covid.currentCountry];
export const selectCurrentCountry = (state) => state.covid.currentCountry;
export const selectCurrentStat = (state) => state.covid.currentStat;
export const selectIsLoaded = (state) => state.covid.isLoaded;

export default covidSlice.reducer;
