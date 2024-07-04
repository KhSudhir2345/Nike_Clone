import React, { useState } from "react";
import LeftNav from "./LeftNav";
import ProductList from "./productlist";
import useFetch from "./useFetch";

const Home=() => {
    const { error, isPending, data: products } = useFetch('http://localhost:8000/products');
    return(
        <div className="home">
            <LeftNav />
            <div className="productList">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { products && <ProductList products={products} /> }
            </div>
        </div>
    )
};
    
export default Home;