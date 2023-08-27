import Image from 'next/image';
import style from './page.module.scss';

function Product() {
    return (
        <div className={style.product}>
            <Image src={'/redmi a2.jpg'} width={360} height={360} alt='' />
            <div>
                <h1>Redmi A2</h1>
                <span className={style.newPrice}>$909</span>
                <span className={style.oldPrice}>$12000</span>
                <span className={style.discount}>36% off</span>
                <span className={style.message}>Saver Deal</span>
            </div>
        </div>
    )
}

export default Product