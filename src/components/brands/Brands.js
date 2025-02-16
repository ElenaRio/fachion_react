import styles from './Brands.module.css';
import hm from './../../img/brands/HM.png';
import oBey from './../../img/brands/Obey.png';
import shopify from './../../img/brands/Shopify.png';
import lacoste from './../../img/brands/Lacoste.png';
import amazon from './../../img/brands/Amazon.png';

function Brands() {
  return (
    <section className={styles.brands}>
      <div className="container">
        <ul className={styles.brandsList}>
            <li className={styles.brandsItem}>
                <a href='#!'><img src={hm} alt='img'/></a>
            </li>
            <li className={styles.brandsItem}>
                <a href='#!'><img src={oBey} alt='img'/></a>
            </li>
            <li className={styles.brandsItem}>
                <a href='#!'><img src={shopify} alt='img'/></a>
            </li>
            <li className={styles.brandsItem}>
                <a href='#!'><img src={lacoste} alt='img'/></a>
            </li>
            <li className={styles.brandsItem}>
                <a href='#!'><img src={amazon} alt='img'/></a>
            </li>
        </ul>
      </div>
    </section>
  );
}

export default Brands;
