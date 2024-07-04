import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Sizes from "./sizes";
import favouritesIcon from './assets/favourites.png'; 
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { favActions } from "./store/fav-slice";

const ProductDetails = () => {
    const notify = () => {
        toast.success('Added to Cart', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    const notify_favs = () => {
        toast.success('Added to Favourites', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const { id } = useParams();
    const { data: product, error, isPending } = useFetch('http://localhost:8000/products/' + id);
    const dispatch = useDispatch();

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <div className="ProductDetails">
                    <div className="product_image">
                        <img src={product.imageUrl} alt={product.productName} />
                    </div>
                    <div className="size_and_details">
                        <h1 style={{ color: 'black' }}>{product.productName}</h1>
                        <h2>{product.division}'s {product.category}</h2>
                        <div id="Price">
                            <div>${product.listPrice}</div>
                        </div>
                        <div id="Size">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h3>Select Size</h3>
                                <a href="#" style={{ marginLeft: '250px', textDecoration: 'none', color: 'grey' }}>Size Guide</a>
                            </div>
                            <Sizes />
                        </div>
                        <button id="Add_to_Bag" onClick={() => {
                            dispatch(cartActions.addtoCart({
                                id: product.id,
                                name: product.productName,
                                price: product.listPrice,
                                imageUrl: product.imageUrl,
                                division: product.division,
                                category: product.category,
                                size: product.size
                            }));
                            notify();
                        }}>
                            Add to Bag
                        </button>
                        <button id="Favourite" style={{ paddingBottom: '12px' }} onClick={() => {
                            dispatch(favActions.addtofavs({
                                id: product.id,
                                name:product.productName,
                                price:product.listPrice,
                                division:product.division,
                                category:product.category,
                                imageUrl: product.imageUrl
                            }));
                            notify_favs();
                        }}>
                            <span style={{ position: 'relative', bottom: '12px', right: '5px', top: '-2px' }}>Favourite</span>
                            <img src={favouritesIcon} style={{ position: 'relative', bottom: '3px' }} alt="Favourite" />
                        </button>
                        <p style={{ position: 'relative', top: '80px', color: '#111111', textAlign: 'left', fontFamily: 'Helvetica' }}>{product.description}</p>
                    </div>
                </div>
            )}
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}

export default ProductDetails;
