import React from "react";
import { Badge } from "react-bootstrap";

function Cart({ products, removeProductFromCart }) {
    return <ul className={'col-12'}>
        {products.map(product => <li key={product.id}>{product.title}<Badge className={'m-2  bg-danger text-white'} onClick={() => removeProductFromCart(product.id)}>Remove</Badge></li>)}
    </ul>

}


export default Cart;