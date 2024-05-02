import { useState, useEffect, useContext } from "react"
import ProductCard from "./product-card"
import ErrorPage from "./error-page"
import { CartContext } from "../root"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { cart, setCart } = useContext(CartContext)

    // add sorting state and function that call the API -> has sorting feature

    // what happens if items are removed not added? how to udpate that?

    // function adds product to the cart -> finds item via "productID"
    const onAddToCart = (productID, quantity) => {
        const newCart = [...cart]
        const Product = products.filter(product => product.id === productID)
        const productToAdd = Product[0]
        productToAdd.quantity = quantity

        // if product is already in the cart -> not working as expected (products are duplicated)
        if (newCart.includes(productToAdd)) {
            newCart.map(product => {
                if (product.id === productToAdd.id) {
                    product.quantity += productToAdd.quantity
                }
            })
        } else {
            newCart.push(productToAdd)
        }

        setCart(newCart)    
    }

    console.log("Cart (state):")
    console.log(cart)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Server error")
                }

                return response.json()
            })
            .then(data => {
                setProducts(data)
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <ErrorPage />
        )
    }

    return (
        <div>
            <h1>Shop</h1>
            {products.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
            
        </div>
    )
}

export default Shop