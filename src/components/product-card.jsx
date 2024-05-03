import { useState } from "react"

// use onAddToCart as a event handler -> send productID and quantity to shop 
// in "shop" add the product to the cart 
const ProductCard = ({ product, onAddToCart}) => {
    const [moreInfo, setMoreInfo] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity - 1)
    }

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const changeQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const toggleInfo = () => {
        setMoreInfo(prevMoreInfo => !prevMoreInfo)
    }

    /*const handleAddToCart = (productID) => {
        console.log("send product + quantity to shop component, ID: " + productID)
        /* how to send it? -> call "onAddToCart" 
    }*/

    return (
        <div className="product-card">
            <img src={product.image} style={{ height: "100px", width: "auto" }}/>
            <h3>{product.title}</h3>
            {moreInfo && <p>{product.description}</p>}
            <p>{product.price}€</p>
            <div className="quantity-section">
                {
                    /* 
                        implement calling to update state in root
                                +
                        implement state variable for quantity of each product
                    */
                }
                <button onClick={decrementQuantity}>-</button>
                <input type="number" value={quantity} onChange={changeQuantity} />
                <button onClick={incrementQuantity}>+</button>
            </div>
            <div className="btn-product-section">
                <button onClick={() => onAddToCart(product.id, quantity)}>Add to cart</button>
                <button onClick={toggleInfo}>More information</button>
            </div>
        </div>
    )
}

export default ProductCard

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