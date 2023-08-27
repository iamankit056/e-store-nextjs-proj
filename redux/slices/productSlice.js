import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '';

const initialState = {
    products: [],
    status: 'idel', // idel | loading | successed | error
    error: null
};

const fetchProducts = createAsyncThunk(
    'fetch/products',
    async () => {
        try {
            
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

    }
})

export const {} = productSlice.actions;
export default productSlice.reducer;