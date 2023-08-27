import Image from 'next/image'
import style from './page.module.scss'
import Product from '@/components/product/page'

export default function Home() {
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
