import CardBuy from '../cardBuy/CardBuy';
import Title from '../title/Title';
import styles from './Catalogue.module.css';
import sweetshirt01 from './../../img/categories/sweetshirt/cat-01.jpg'
import sweetshirt02 from './../../img/categories/sweetshirt/cat-02.jpg'
import sweetshirt03 from './../../img/categories/sweetshirt/cat-03.jpg'
import sweetshirt04 from './../../img/categories/cat-01.jpg'
import coats01 from './../../img/categories/coats/coats01.jpg'
import coats02 from './../../img/categories/coats/coats02.jpg'
import coats03 from './../../img/categories/cat-02.jpg'
import tShirt01 from './../../img/categories/cat-03.jpg'
import tShirt02 from './../../img/categories/tShirt/tShirt01.jpg'
import tShirt03 from './../../img/categories/tShirt/tShirt02.jpg'
import tShirt04 from './../../img/categories/tShirt/tShirt03.jpg'
import tShirt05 from './../../img/categories/tShirt/tShirt04.jpg'
import tShirt06 from './../../img/categories/tShirt/tShirt05.jpg' 




function Catalogue() {
  return (
    <section className={styles.catalogue}>
      <div className="container">
        <Title title="Hoodies & Sweetshirt" />
        <div className={styles.container}>
        <CardBuy  title='Hoodie' img={sweetshirt01} price={50}/>
        <CardBuy  title='Sweetshirt' img={sweetshirt02} price={50}/>
        <CardBuy  title='Sweetshirt' img={sweetshirt03} price={50}/>
        <CardBuy  title='Hoodie' img={sweetshirt04} price={50}/>
        <CardBuy  title='Sweetshirt' img={sweetshirt02} price={50}/>
        <CardBuy  title='Sweetshirt' img={sweetshirt03} price={50}/>
        </div>
        <Title title="Coats & Parkas" />
        <div className={styles.container}>
        <CardBuy title='Coats' img={coats01} price={50}/>
        <CardBuy title='Coats' img={coats02} price={50}/>   
        <CardBuy title='Coats' img={coats03} price={50}/>        
        </div>
        <Title title="Tees & T-Shirt" />
        <div className={styles.container}>
        <CardBuy  title='T-Shirt' img={tShirt01} price={50}/>
        <CardBuy  title='T-Shirt' img={tShirt02} price={50}/>      
        <CardBuy  title='T-Shirt' img={tShirt03} price={50}/>   
        <CardBuy  title='T-Shirt' img={tShirt04} price={50}/>   
        <CardBuy  title='T-Shirt' img={tShirt05} price={50}/>   
        <CardBuy  title='T-Shirt' img={tShirt06} price={50}/>   
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
