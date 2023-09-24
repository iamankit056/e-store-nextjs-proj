'use client';
import Image from 'next/image';
import style from './page.module.scss';
import { BsFillCartFill } from 'react-icons/bs';
import { AiFillThunderbolt } from 'react-icons/ai';

function ProductDetails({params}) {
    return (
    <div className={style.container}>
        <div className={style.images}>
            <Image src={'/redmi a2.jpg'} width={400} height={500} alt='' />
        </div>
        <div className={style.productDetails}>
            <h1>Redmi A2</h1>
            <p className={style.highlights} >Light weight, 8Gb Ram, 512gb SSD</p>
            <p className={style.price}>
                <span className={style.oldPrice}>10000₹</span>
                <span className={style.newPrice}>10000₹</span>
                <span className={style.discount}>36% off</span>
            </p>
            <div className={style.actions}>
                <button className={style.addToCart}><BsFillCartFill /> ADD TO CART</button>
                <button className={style.buy}><AiFillThunderbolt /> BUY NOW</button>
            </div>
            <div className={style.details}>
                <h1>Highlights</h1>
                <ul className={style.highlights}>
                    <li>8gb ram | 128gb rom</li>
                    <li>15.97 inch display</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default ProductDetails;