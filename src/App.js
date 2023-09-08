import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Contact from './Component/Contact';
import About from './Component/About';
import Navbar from './inc/Navbar';
import Categories from './Component/Categories';
import Product from './Component/Product';
import ProductDetails from './Component/ProductDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./Component/Blog";
import Home from "./Component/Home";
import PageNotFound from "./Component/PageNotFound";

import {createStore} from "redux"
import { Provider } from "react-redux";
import ShowCart from "./Component/ShowCart";
import Footer from './Component/Footer'
import rootReducer from "./Component/reducers/rootReducer";
import Men from "./Categories/Men";
import Women from "./Categories/Women";
import Electronics from "./Categories/Electronics";
import Jewelery from "./Categories/Jewelery";
import All from "./Categories/All";
import FilterProducts from "./Component/FilterProducts";
import TrendingProducts from "./Component/TrendingProducts";
// import LogIn from "./Component/l";



function App() {
 
  // TO creatr a store
  const store = createStore(rootReducer);
  return (
    <BrowserRouter>
      <div className='App'>
    <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="filterProducts" element={<FilterProducts />} />
          <Route path="/filterProducts/:productId" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> */}
          <Route path="/show" element={<ShowCart />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/all" element={<All />} />
          {/* <Route path="/logIn" element={<LogIn />} /> */}
        </Routes>
        {/* <LogIn/> */}
        <TrendingProducts/>
        <Footer/>
    </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

