'use client';
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
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMzIwNzEwLCJpYXQiOjE2OTMzMTM1MTAsImp0aSI6IjZkMGZkNGNiNGNiZjQ0YzU4NTcwZmUzYzk5MmQyODI2IiwidXNlcl9pZCI6MX0.ij-uK3noY3dSspphTbU_xmYNZAjcDJELR4NsyBwexx8'
                }
            }
            console.log('fetch...')
            const response = await axios.get(API_URL, config);
            console.log(response.data);
            return response.data;
        }
        catch(err) {
            console.log(err);
            return err.message;
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