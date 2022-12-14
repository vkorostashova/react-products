import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

function SingleProduct() {
    let { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + productId)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    return <div className={'col-sm-12 col-md-6 col-lg-4 col-xl-3 product'}>
        <div className={"text-center"}>
            <img src={product.image} />
        </div>
        <h5>{product.title}</h5>
        <h6>{product.price}$</h6>
    </div>
}

export default SingleProduct;