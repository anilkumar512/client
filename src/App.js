import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Product from './component/Product';
import Nomatch from './component/Nomatch';
import New from './component/New';
import Best from './component/Best';
import Order from './component/Order';
import User from './component/User';
import { UserDet } from './component/UserDet';
import { Profile } from './component/Profile';
import { Login } from './component/Login';
import { AuthProvider } from './component/Auth';
import { RequireAuth} from './component/RequireAuth';
import { Signup } from './component/Signup';
import LoginSuccess from './component/LoginSuccess';
import SignupSuccess from './component/SignupSuccess';
import BMICalculator from './component/bmicalculator';
import Header from './component/Header';
import Main from './component/Main';
import Basket from './component/Basket';
import data from './data';
// import Product from './Product';
// import Header from './component/Header';
// import Main from './component/Main';
// import Basket from './component/Basket';
// import data from './Data';
// import { useState } from 'react';



function App() {
  // const { products } = data;
  // const [cartItems, setCartItems] = useState([]);
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='*' element={<Nomatch/>}></Route>
        <Route path='/product' element={<RequireAuth><Product/></RequireAuth>}>
          <Route path='Header' element={<Header/>}></Route>
          <Route path='Main' element={<Main/>}></Route>
          <Route path='Basket' element={<Basket/>}></Route>
          <Route path='Data' element={<data/>}></Route>
          
        </Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/user' element={<User/>}>
        <Route path=':userid' element={<UserDet/>}></Route>
        </Route>
        <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}></Route>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/loginsuccess' element={<LoginSuccess/>}></Route>
        <Route path='/signupsuccess' element={<SignupSuccess/>}></Route>
        <Route path='/bmicalculator' element={<RequireAuth><BMICalculator/></RequireAuth>}></Route>
        

        
     </Routes>
     </AuthProvider>
     {/* <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
       </div>
       <div className='row'>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>  */}





    </div>
  );
}

export default App;
