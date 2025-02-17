import styles from './BasketProduct.module.css';
import Count from './Count';
import formatPrice from './../../utils/priceFormatter'
import ButtonDelete from './ButtonDelete';


function BasketProduct({ product, deleteProduct, increase, changeValue, decrease }){
    const { img, title, priceTotal, count, id } = product;
	
    return(
        <div className={styles.basketProduct}>
            <div className={styles.img}>
				<img src={img} alt={title} />
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.count}>
				<Count count={count} increase={increase} decrease={decrease} changeValue={changeValue} id={id} />
			</div>
			<div className={styles.price}>
				{formatPrice(priceTotal)} $
			</div>
			<div className={styles.controls}>
				<ButtonDelete deleteProduct={deleteProduct} id={id} />
			</div>
        </div>
    )
}

export default BasketProduct;