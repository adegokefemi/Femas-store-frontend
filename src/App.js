import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import { useSelector } from 'react-redux';
import Success from './pages/Success';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const Container = styled.div`


`

// const Wrapper = styled.div`
//   list-style: none;
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   text-underline: none;
//   &:hover {
//     color: teal;
//   }

// `


function App() {
 const  user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Container>
        {/* <ul>
          <Wrapper>
          <li>
                <Link to="/">Home</Link><br></br>
            </li>
            <li>
                <Link to="/products/categories">ProductList</Link><br></br>
            </li>
            <li>
               <Link to="/products/:id">Product</Link>
            </li>
          </Wrapper>
        </ul> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={ <ProductList/>}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
          <Route path="/register" element={ <Register/> }></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
