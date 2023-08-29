import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/products/';

const initialState = {
    products: [],
    status: 'idel', // idel | loading | successed | failed
    error: null
};

export const fetchProducts = createAsyncThunk(
    'fetch/products',
    async () => {
        try {
            const config = {
                Header: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMzEzMDg4LCJpYXQiOjE2OTMzMDU4ODgsImp0aSI6ImUyYmQwNmNmNWMwNDQxZWNiMjJjNWVhZTgzMDM2ZmE5IiwidXNlcl9pZCI6MX0.6jbh0NfCw7XwlNjoktjXdCyflwaPkFrIaZV9Vt14rHg'
                }
            }
            const { data } = axios.get(API_URL, config);
            console.log(data);
            return data;
        }
        catch(err) {
            return err;
        }
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchProducts.pending]: state => state.status = 'loading',
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'successed';
            state.products = action.payload;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    }
})

export const getProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export const {} = productSlice.actions;
export default productSlice.reducer;