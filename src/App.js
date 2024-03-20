import React from 'react';
import ProductList from './ProductList';
import './App.css';

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest smartphone with advanced features.", price: 800 },
  { id: 3, name: "Tablet", description: "Portable tablet for entertainment and productivity.", price: 500 },
];

function App() {
  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;