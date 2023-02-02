import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const[page,setPage]=useState(1);
  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    .then(res => res.json())
    .then(data=>setProducts(data));
    consolee.log(data)
   
  },[])return (
    <main>
        {products.map((p)=>{
          return <div className="main_products">{p.thumbnail}</div>
        })}
    </main>
  ) 
}

export default App
