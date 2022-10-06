import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            const cart = action.payload
            return cart
        }
    }
})

export const getCarThunk  = () => (dispatch) => {
    dispatch( setIsLoading(true))
    axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then( res => dispatch(setCart(res.data.data.cart.products)))
    .finally( () => dispatch( setIsLoading(false)))
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
