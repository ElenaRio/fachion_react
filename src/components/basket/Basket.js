import { useState, useEffect } from 'react';
import styles from './Basket.module.css';
import BasketProduct from './BasketProduct';
import FooterBasket from './FooterBasket';
import HeaderBasket from './HeaderBasket';
import Title from '../title/Title';

function Basket({ cartItems }) {
  const [cart, setCart] = useState(cartItems);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: cart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: cart.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    setCart((cart) => {
      return cart.filter((product) => {
        return id !== product.id;
      });
    });
  };
  
  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count+1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? --product.count : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };
  
  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <BasketProduct
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });
  return (
    <section className={styles.basket}>
      <div className="container">
        <Title title="Shopping Cart"/>
        <div className={styles.basketContainer}>
        <HeaderBasket />
        <div className={styles.basketWrapper}>
        {products}
        </div>
        <FooterBasket total={total} />
        </div>
      </div>
    </section>
  );
}

export default Basket;
