import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Products from './Components/Products';
import SearchItems from './Components/SearchItems';
import ProductDetail from './Components/ProductDetail';
import Sdata from './Components/Sdata';
import { useState } from 'react';


function App() {
  const [data , setData] = useState([...Sdata])
  const [cart, setCart] = useState([])
  return (
 <>

 <Router>
  <Navbar cart={cart} setData={setData} />
  <Routes>
    <Route path='/' element={<Products cart={cart} setCart={setCart} Sdata={data} />} />
    <Route path='/product/:id'  element={<ProductDetail />}/>
    <Route path='/search/:term'  element={<SearchItems />}/>
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
  </Routes>
    
 </Router>
 </>
  );
}

export default App;
