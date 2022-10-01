import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload
            return products
        }
    }
})

export const productsThunk = () => (dispacth) => {
    dispacth(setIsLoading(true))
    axios
    .get( 'https://ecommerce-api-react.herokuapp.com/api/v1/products' )
    .then( res => dispacth(setProducts(res.data.data.products)))
    .finally( res => dispacth(setIsLoading(false)))
}



export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
