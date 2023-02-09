import { useEffect, useState } from "react";
import styled from "styled-components";
//import { popularProducts }  from "../data";
import Product from "./Product";
import axios from "axios";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`

function Products({cat, filters, sort}) {
const [products, setProduct] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
  const getProduct = async () => {
    try {
      const res = await axios.get( cat 
        ?`http://localhost:5000/api/products?category=${cat}` 
        : "http://localhost:5000/api/products");
      setProduct(res.data);
    } catch (err) {}
  }
  getProduct();
}, [cat])


useEffect(() => {
  // setFilteredProducts set the products when the products is filter i.e color and size is selected.
  cat && setFilteredProducts(
    products.filter((item) => 
      Object.entries(filters).every(([key, value]) => 
        item[key].includes(value)
      )
    )
  );
},[cat, filters, products]);


useEffect(() => {
  if (sort === "newest") {
    setFilteredProducts((prev) => 
      [...prev].sort((a, b) => a.createdAt - b.created)
    );
  } else if (sort === "asc") {
    setFilteredProducts((prev) => 
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) => 
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
},[sort]);

  return (
    <Container>
        { cat 
        ? filteredProducts.map((item) => (<Product item={item} key={item.id}/>)) 
        : products.slice(0,6).map((item) => (
          <Product item={item} key={item.id}/>))
           }
    </Container>
  )
}

export default Products;
