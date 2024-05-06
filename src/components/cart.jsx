import { useState, useContext, createContext } from "react"
import { CartContext } from "../root"

const Cart = () => { 
    // receives cart from root
    const { cart, setCart } = useContext(CartContext)
    let totalPrice = 0
    cart.map(product => totalPrice = product.price + totalPrice)

    const removeFromCart = (productID) => {
        const updatedCart = cart.filter(product => product.id !== productID)
        setCart(updatedCart)
    }
    
    return (
        <div className="cart">
            <h1 className="cart-title">Cart</h1>
            <div className="cart-component">
                {cart.length === 0 
                    ? <p className="empty-cart-msg">Your cart is empty.</p>
                    : (
                        <>
                            <table className="cart-table">
                                <thead>
                                    <tr className="cart-table-header-row">
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product, index) => (
                                        <tr key={index} className="cart-table-product-row">
                                            <td>
                                                <div className="cart-table-product-details">
                                                    <img src={product.image} style={{ height: "100px", width: "auto" }} />
                                                    <p>{product.title}</p>
                                                </div>
                                            </td>
                                            <td>{product.quantity}</td>
                                            <td>{product.price * product.quantity}€</td>
                                            <td><button onClick={() => removeFromCart(product.id)}>Remove Item</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="cart-checkout">
                                    <p>Total price: <strong>{totalPrice}€</strong></p>
                                    <button onClick={buy}>Checkout</button>
                            </div>
                        </>
                        
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