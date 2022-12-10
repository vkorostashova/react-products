import React, { useEffect } from "react";
import { useState } from "react";
import './Products.css';
import Product from "./Product";
import Cart from "./Cart";


function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProducts(data.map(product => {
            return { ...product, addedToCart: false, count: 1 };
        })));
    }, []);
    console.log(products)

    function addProductToCart(id) {
        const result = [];
        for (let product of products) {
            if (product.id === id) {
                result.push({ ...product, addedToCart: true })
            } else {
                result.push(product);
            }
        }
        setProducts(result)
    }

    function removeProductFromCart(id) {
        const result = products.map(product => ({ ...product, addedToCart: product.id === id ? false : product.addedToCart }));
        setProducts(result);

    }



    return <div className={'row p-4'}>
        <Cart
            removeProductFromCart={removeProductFromCart}
            products={products.filter(product => product.addedToCart)}
        />
        {products.map(product => <Product
            removeProductFromCart={removeProductFromCart}
            addProductToCart={addProductToCart}
            product={product}
            key={product.id} />)}

    </div>

}

export default Products;