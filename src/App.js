// comnfigureStore.js
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to localStorege for web
import { PersistGate } from "redux-persist/integration/react";


import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Contact from './Component/Contact';
import About from './Component/About';
import Navbar from './inc/Navbar';
import Navbar2 from './inc/Navbar2';
import ProductDetails from './Component/ProductDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./Component/Blog";
import Home from "./Component/Home";
import PageNotFound from "./Component/PageNotFound";

// import {createStore} from "redux"
import { Provider } from "react-redux";
import ShowCart from "./Component/ShowCart";
import Footer from './Component/Footer'
import rootReducer from "./Component/reducers/rootReducer";
import All from "./Component/All";
import LogIn from "./Component/LogIn";
import TrendingProducts from "./Component/TrendingProducts";
import LatestProducts from "./Component/LatestProducts";
import CheckOut from "./Component/CheckOut";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TellMeAll from "./Component/TellMeAll";
import Testimonies from "./Component/Testimonies";
import Music from "./Component/Music";
import VideoPlayer from "./Component/VideoPlayer";
import Try from "./Component/Try";
import EditProduct from "./Component/EditProduct";
import FirstPage from "./Component/FirstPage";


function App() {
     
  // function for react persist
  const persistconfig = {
    key: "root",
    storage,
  };

  
  // TO creatr a store       // and create react persist
const persistedReducer = persistReducer(persistconfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
 
  // const store = createStore(rootReducer);
  return (
    <BrowserRouter>
      <div className='App'>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <Navbar2/> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="/tellMeAll" element={<TellMeAll />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signUp" element={<Contact />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/all" element={<All />} />
          <Route path="/all/:productId" element={<ProductDetails />} /> 
          <Route path="/all/:productId/edit" element={<EditProduct />} /> 
          <Route path="/trendingProducts" element={<TrendingProducts/>} /> 
          <Route path="/latestProducts" element={<LatestProducts />} /> 
          <Route path="/show" element={<ShowCart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/videos" element={<VideoPlayer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/try" element={<Try />} />
        </Routes>
        <Testimonies/>
        <Try />
        <Footer/>
        <ToastContainer />
        </PersistGate>
    </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

