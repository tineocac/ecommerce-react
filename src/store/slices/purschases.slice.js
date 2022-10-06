import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const purschasesSlice = createSlice({
    name: 'purschases',
    initialState: [],
    reducers: {
        setPurschases: (state, action) => {
            return action.payload
        }


    }
})

export const getPurschasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig() )
        .then( res => dispatch(setPurschases(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
        
}

export const { setPurschases } = purschasesSlice.actions;

export default purschasesSlice.reducer;
