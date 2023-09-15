import Header from '../component1/Header'
import Main from '../component1/Main';
import Basket from '../component1/Basket';
import data from '../data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
       </div>
       <div className='row'>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;

/*import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./component/login"
import Home from "./component/Home"
import AddProduct from './component/AddProduct';
import GetProducts from './component/GetProducts';
import GetProduct from './component/GetProduct';
import Signup from './component/Signup';
import UserCart from './component/UserCart';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add/product' element={<AddProduct />} />
        <Route path='/get/products' element={<GetProducts />} />
        <Route path='/get/product/:id' element={<GetProduct />} />
        <Route path='/get/cart' element={<UserCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      hello eco
    </div>
  );
}

export default App;
*/