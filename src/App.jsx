
import "./App.css"
import { useState,useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const[page,setPage]=useState(1);
  const[totalPages,setTotalPages]=useState(0);

  useEffect(()=>{
    fetch(`https://dummyjson.com/products?limit=10&skip=${page*5}`)
    .then(res => res.json())
    .then(data=>{
      if(data&&data.products.length>0){
        setProducts(data.products)
        setTotalPages(data.total/5)
      }
    console.log(data)
    });
  },[page])

  return (
    <main>
      <div className="products">
        {products.map((p)=>{
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
        {[...new Array(totalPages)].map((_,i)=>{
            return <span key={i} onClick={()=>{
              setPage(i+1)}} 
          className={`pagination--values ${page===i+1?"selected":""}`}
            >{i+1}</span>;
        })}
        <span onClick={()=>{
            setPage(page+1)
        }}
        className={page>=totalPages?"disable":""}
        >Next</span>
      </div>
    </main>
  ) 
}

export default App
