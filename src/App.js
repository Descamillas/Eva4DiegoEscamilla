import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import ProductsAdmin from './components/products/ProductsAdmin';
import ProductsAdd from './components/products/ProductsAdd';
import ProductsEdit from './components/products/ProductsEdit';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/products" element={<ProductsAdmin />}></Route>
        <Route path="/products/add" element={<ProductsAdd />}></Route>
        <Route path="/products/edit" element={<ProductsEdit />}></Route>
      </Routes>
    </div>
  );

}

export default App;
