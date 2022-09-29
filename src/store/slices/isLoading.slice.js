import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {

    }
})

export const {  } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
