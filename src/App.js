import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kis_banner from "./Components/Assets/banner_kids.png"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kis_banner} category="kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
