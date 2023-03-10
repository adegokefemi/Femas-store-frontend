import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import { mobile } from "../responsive";

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter= styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"opx"})}
`
const Select = styled.select`
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`

`


function ProductList() {
 const location = useLocation();
 const cat = location.pathname.split("/")[2];
 const [filters, setFilters] = useState({});
 const [sort, setSort] = useState("newest");


const handleFilters = (e) => {
        // const value = e.target.value;
        setFilters({
            // spread the initial value filters and update it with the new value.
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    return (
    <Container>
      <Navbar/>
      <Announcement/>  
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter> 
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
            <Option disabled >Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
        </Select>
        <Select name="size" onChange={handleFilters}>
            <Option disabled >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
        </Filter>
        <Filter>
            {/* value is set for each of the option below to avoid taking each of the item in the option as target value */}
            <FilterText>Sorts Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>   
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
