'use client';
import Image from 'next/image'
import style from './page.module.scss'
import Product from '@/components/product/page'
import { useEffect } from 'react'
import { fetchProducts, getProducts, getProductsError, getProductsStatus } from '@/redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    // const dispatch = useDispatch();
    // const products = useSelector(getProducts);
    // const productsStatus = useSelector(getProductsStatus);
    // const error = useSelector(getProductsError);

    // useEffect(() => {
    //     if(productsStatus == 'idel') {
    //         dispatch(fetchProducts());
    //     }
    // }, [productsStatus, dispatch]);


    // let content;
    // if(productsStatus == 'loading') {
    //     content = <p>Loading...</p>
    // } else if(productsStatus == 'successed') {
    //     content = products.map(product => <Product key={product.id} /> )
    // }
    // else if(productsStatus == 'failed') {
    //     content = <p>Error: {error}</p>
    // }

    // return content;

    return (
        <div className={style.container}>
            <div className={style.banner}></div>

            <div className={style.products}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}
