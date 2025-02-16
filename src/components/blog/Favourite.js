import { NavLink } from 'react-router-dom';
import styles from './Favourite.module.css';
import Title from '../title/Title';
import Card from '../card/Card';
import promo1 from './../../img/images/promo-01.jpg';
import promo2 from './../../img/images/promo-02.jpg';

function Favourite() {
  return (
    <section className={styles.favourite}>
      <div className="container">
        <div className={styles.favouriteHeader}>
          <Title title="Young’s Favourite" />
          <div className={styles.cards}>
            <NavLink to="/blog">
              {' '}
              <Card title="Trending on instagram" img={promo1} />
            </NavLink>

            <Card title="All Under $40" img={promo2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favourite;
