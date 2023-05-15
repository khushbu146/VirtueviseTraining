import React from "react";
const Products = () =>{
    const API="https://dummyjson.com/products";
    const [data, setData] = useState([]);

  const fetchApiData = async (url) => {
   const res = await fetch(url);
   const data = await res.json();
   //console.log(data);
   return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
   
  };
 
 // console.log(data);
  useEffect(() => {
    fetchApiData(API);
  }, []);

 const d = data.products;
    return (
      
      <center>
      {d.map((dataObj, index) => {
        return (
      
            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.title}</p>
         
        );
      })}
    </center>
         
    );
}; 

export default Products;