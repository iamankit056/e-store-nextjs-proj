import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/products/';

const initialState = {
    products: [],
    status: 'idel', // idel | loading | successed | error
    error: null
};

export const fetchProducts = createAsyncThunk(
    'fetch/products',
    async () => {
        try {
            const config = {
                Header: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTYzMzA4LCJpYXQiOjE2OTMxNTYxMDgsImp0aSI6Ijg3M2U0YzBiNmUwYjQ0NzU5NTdhZjRiODVlYTIxNTE0IiwidXNlcl9pZCI6MX0.fayTVvpFFfMEJp9FVoDPc08vnIDW8PSvVNVuBd3AHYU'
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
    name: 'product',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [fetchProducts.pending]: state => state.status = 'loading',
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'successed';
            state.products = action.payload;
        },
        [fetchProducts.rejected]: state => {
            state.status = 'error';
        },
    }
})

export const {} = productSlice.actions;
export default productSlice.reducer;