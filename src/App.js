import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Router basename="/fachion_react">
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
          <Route path="/catalogue" element={<Catalogue />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
