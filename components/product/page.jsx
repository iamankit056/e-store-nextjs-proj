import Image from 'next/image';
import style from './page.module.scss';
import Link from 'next/link';

function Product({ product }) {
    console.log(product);
    const { id, name, price, discount, details, image } = product;
    const finalPrice = price * (100 - discount) / 100;
    return (
        <Link href={`/product/${id}`}>
            <div className={style.product}>
                <Image src={image} width={360} height={360} alt='' />
                <div>
                    <h1>{name}</h1>
                    <span className={style.newPrice}>{price}$</span>
                    <span className={style.oldPrice}>{finalPrice}$</span>
                    <span className={style.discount}>{discount}% off</span>
                    <span className={style.message}>Saver Deal</span>
                </div>
            </div>        
        </Link>
    )
}

export default Product