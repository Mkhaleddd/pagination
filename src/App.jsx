
import "./App.css"
import { useState,useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const[page,setPage]=useState(1);
  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(data=>{
      if(data&&data.products.length>0)setProducts(data.products)
      
    console.log(data)
    });
  },[])

  return (
    <main>
      <div className="products">
        {products.slice(page*5-5,page*5).map((p)=>{
          return <span key={p.id} className="single--products">
                   <img src={p.thumbnail} alt={p.title}/>
                   <span>{p.title}</span>
                 </span>
        })}
      </div>
      <div className="pagination">
        <span 
        className={page<=1?"disable":""}
        onClick={()=>setPage(page-1)}>Prev</span>
        {[...new Array(products.length/5)].map((_,i)=>{
            return <span key={i} onClick={()=>{
              setPage(i+1)
              console.log(i+1,page)
            }} 
          className={`pagination--values ${page===i+1?"selected":""}`}
            >{i+1}</span>;
        })}
        <span onClick={()=>{
            setPage(page+1)
        }}
        className={page>=products.length/5?"disable":""}
        >Next</span>
      </div>
    </main>
  ) 
}

export default App
