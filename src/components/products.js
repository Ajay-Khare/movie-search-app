import { useEffect, useState } from "react"
import Cart from "./cart";


const Product = () => {
    // initial sample products
    const [products, setProducts] = useState([
        { id: 1, name: 'Product-1', price: 100, quantity:0 },

        { id: 2, name: 'Product-2', price: 200, quantity:0 },

        { id: 3, name: 'Product-3', price: 300, quantity:0 },
    ])


    // initial quantity is 0
    const [quantity, setQuantity] = useState([0, 0, 0]);

    


    // handling increment and decrement of product quantity
    const countHandler = (e) => {
        e.preventDefault();
        const id = e.target.id;
        let temp = products;
        if (e.target.innerHTML == "+") {
            temp[id].quantity = temp[id].quantity+1
        }
        else {
            if (temp[id].quantity > 0) {
                temp[id].quantity = temp[id].quantity + 1
            }
        }

        setProducts(temp)
        console.log(products)
    }

    useEffect(() => {
        // setQuantity(temp)
        console.log("hii")
    },[products])



    return (
        <>
            {
                products.map((ele, i) => {
                    return (
                        <>
                            <div className="productContainer">
                                <span>{ele.name} </span>
                                <span> {ele.price}</span>
                                <button onClick={countHandler} id={i}>+</button>
                                <span>{quantity[i]}</span>
                                <button onClick={countHandler} id={i}>-</button>
                            </div>
                        </>
                    )
                })
            }
            <Cart data = {products}/>
        </>
    )
}


export default Product