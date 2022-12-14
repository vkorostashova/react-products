import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Total({ products }) {
    const [total, setTotal] = useState([]);

    useEffect(() => {
        setTotal(products.reduce((acc, product) => {
            return acc + (product.price * product.count);
        }, 0).toFixed(2))
    }, [products])

    return <h3 className={'col-12'}>Total:{total}$</h3>
}
export default Total;