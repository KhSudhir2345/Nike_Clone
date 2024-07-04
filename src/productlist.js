import { Link } from "react-router-dom";

const ProductList= ({ products }) => {
    console.log(products);
    return(
        <div className="products_display">
        {products.map(product => (
            <div className="grid-item" key={product.id}>
                <Link to={`/products/${product.id}`}>
                    <img src={product.imageUrl} style={{backgroundColor:'#f5f5f5'}}></img>
                    <p style={{fontWeight:'600'}}>{product.productName}</p>
                    <p>{product.division}'s {product.category}</p>
                    <p>${product.listPrice}</p>
                </Link>
            </div>
        ))} 
        </div>
    )
}

export default ProductList;