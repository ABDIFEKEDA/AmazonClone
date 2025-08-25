import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from './Pages/LandPage/Landing';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart';
import SignUp from './Pages/Auth/SignUp';
import Result from './Pages/Results/Result';
import ProductDetail from './Pages/ProductDetail/ProductDetail';


function Routing() {
  return (
    <Router>
        <Routes>
            <Route>
              <Route path='/' element={<Landing/>}/>
              <Route path='/auth' element={<SignUp/>}/>
              <Route path='/payments' element={<Payment/>}/>
              <Route path='/orders' element={<Order/>}/>
              <Route path='/category/:categoryName' element={<Result/>}/>
              <Route path='/category/:productId' element={<ProductDetail/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default Routing