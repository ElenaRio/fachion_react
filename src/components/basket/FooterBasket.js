import styles from './FooterBasket.module.css';
import formatPrice from './../../utils/priceFormatter'

function FooterBasket ({ total }){
    const { count, price } = total;
    return(
        <div className={styles.basketFooter}>
            <div  className={styles.count}>{count} Units</div>
			<div  className={styles.price}>
				{formatPrice(price)} $
			</div>
        </div>
    )
}

export default FooterBasket;