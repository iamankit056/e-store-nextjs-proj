'use client';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/products';

const initialState = {
    products: [],
    status: 'idel', // idel | loading | successed | failed
    error: null
};

export const fetchProducts = createAsyncThunk(
    'fetch/products',
    async ({rejectWithValue}) => {
        try {
            const config = {
                Header: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMzk2MzgyLCJpYXQiOjE2OTMzODkxODIsImp0aSI6IjU0Y2E3ZWJkZjJlNzRhMmU5NjQxMTU2ZTBiMThiZWFiIiwidXNlcl9pZCI6MX0.75GxJ827yAc8HFLGaSQI0HW_2vSMhCXpnS5LBUW5ZdM'
                }
            }   
            console.log('fetch...')
            const response = await axios.get(API_URL, config);
            console.log(response.data);
            return response.data;
        }
        catch(error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'successed';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;                
            })
    }
})

export const getProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export const {} = productSlice.actions;
export default productSlice.reducer;