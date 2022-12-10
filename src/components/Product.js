import React from "react";
import { Button } from 'react-bootstrap';

function Product({ product, addProductToCart, removeProductFromCart }) {
    return <div className={'col-sm-12 col-md-6 col-lg-4 col-xl-3 product'}>
        <div className={"text-center"}>
            <img src={product.image} />
        </div>
        <h5>{product.title}</h5>
        <h6>{product.price}$</h6>
        {product.addedToCart ? <Button variant={'danger'} onClick={(() => removeProductFromCart(product.id))}>Remove from Cart</Button>
            : <Button variant={'success'} onClick={(() => addProductToCart(product.id))}>Add to Cart</Button>}
    </div>
}
export default Product;