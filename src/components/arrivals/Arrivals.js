import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import Title from '../title/Title';
import styles from './Arrivals.module.css';
import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';

function Arrivals() {
  return (
    <section className={styles.arrivals}>
      <div className="container">
        <div className={styles.arrivalsHeader}>
          <Title title="NEW ARRIVALS" />
          <div className={styles.cards}>
            <NavLink to="/catalogue">
              <Card title="Hoodies & Sweetshirt" img={cat01Img} />{' '}
            </NavLink>
            <NavLink to="/catalogue">
              <Card title="Coats & Parkas" img={cat02Img} />{' '}
            </NavLink>
            <NavLink to="/catalogue">
              <Card title="Tees & T-Shirt" img={cat03Img} />{' '}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
