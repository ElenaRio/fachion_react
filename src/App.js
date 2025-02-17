import {  HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Arrivals from './components/arrivals/Arrivals';
import Promo from './components/promo/Promo';
import PlayDay from './components/playday/PlayDay';
import Favourite from './components/blog/Favourite';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';
import Catalogue from './components/catalogue/Catalogue';
import Blog from './components/blog/Blog';
import ScrollToTop from './utils/scrolToTop';
import Contact from './components/contact/Contact';
import Basket from './components/basket/Basket'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1, priceTotal: (item.count + 1) * item.price } : item
        );
      }

      return [...prevCart, { ...product, count: 1, priceTotal: product.price }];
    });
  };



  return (
    <div className="App">






      <Router >
        <ScrollToTop />
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Promo />
                <Brands />
                <Arrivals />
                <PlayDay />
                <Favourite />
                <Download />
              </>
            }
          ></Route>
          <Route path="/catalogue" element={<Catalogue addToCart={addToCart}/>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/basket" element={<Basket cartItems={cartItems}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
