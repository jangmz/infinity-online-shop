import { useState, useContext, createContext } from "react"
import { CartContext } from "../root"

const Cart = () => { 
    // receives cart from root
    const { cart, setCart } = useContext(CartContext)

    const removeFromCart = (productID) => {
        const updatedCart = cart.filter(product => product.id !== productID)
        setCart(updatedCart)
    }
    
    return (
        <div>
            <h1 className="cart-title">Cart</h1>
            <div className="cart-component">
                {cart.length === 0 
                    ? <p>Your cart is empty.</p>
                    : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index) => (
                                    <tr key={index}>
                                        <td><img src={product.image} style={{ height: "100px", width: "auto" }} />{product.title}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price * product.quantity} €</td>
                                        <td><button onClick={() => removeFromCart(product.id)}>Remove Item</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                )}
            </div>            
        </div>
    )
}

export default Cart

/*
    PRODUCT JSON:
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
*/