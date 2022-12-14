import React from "react";
import { Badge } from "react-bootstrap";
import Total from "./Total";

function Cart({ products, removeProductFromCart, changeCount }) {
    return <>
        <ul className={'col-12'}>
            {products.map(product => <li key={product.id}>{product.title}
                (<Badge className={'m-1  bg-danger text-white'} onClick={() => changeCount(product.id, product.count - 1)}>-</Badge> {product.count} <Badge className={'m-1  bg-success text-white'} onClick={() => changeCount(product.id, product.count + 1)} >+</Badge>)
                <Badge className={'m-2  bg-danger text-white'} onClick={() => removeProductFromCart(product.id)}>Remove</Badge></li>)}
        </ul>
        <Total
            products={products}
        />
    </>
}


export default Cart;