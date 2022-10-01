import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => {
            const loader = action.payload
            return loader
        }

    }
})

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
