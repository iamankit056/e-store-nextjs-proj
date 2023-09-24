'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import products from '../data/products';

const API_URL = 'http://localhost:8000/products';

const initialState = {
    products: products,
    status: 'idel', // idel | loading | successed | failed
    error: null
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export const getProducts = state => state.products.products;
export const getProductsStatus = state => state.products.status;
export const getProductsError = state => state.products.error;

export const {} = productSlice.actions;
export default productSlice.reducer;