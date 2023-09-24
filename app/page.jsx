'use client';
import Image from 'next/image'
import style from './page.module.scss'
import Product from '@/components/product/page'
import { useEffect } from 'react'
import { getProducts, getProductsError, getProductsStatus } from '@/redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const products = useSelector(getProducts);
    const dispatch = useDispatch();



    return (
        <div className={style.container}>
            <div className={style.banner}></div>
            <div className={style.products}>
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}
