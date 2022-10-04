import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import  productsSlice  from './slices/products.slice'
import purschasesSlice from './slices/purschases.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice,
        purschases: purschasesSlice
    }
})
