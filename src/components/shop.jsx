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

    const onAddToCart = (productID, quantity) => {
        const productToAdd = products.find(product => product.id === productID)
        
        // product not found
        if (!productToAdd) {
            alert("Product does not exist!")
            return;
        }

        // is product already in the cart
        const existingProductIndex = cart.findIndex(product => product.id === productToAdd.id)

        // update quantity if product is in the cart
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingProductIndex].quantity += quantity
            setCart(updatedCart)
        } else {
            // add it to the cart if it's not there yet
            const updatedCart = [...cart, {...productToAdd, quantity }]
            setCart(updatedCart)
        }
    }

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
        <div className="shop-component">
            <h1 className="shop-title">Shop</h1>
            <div className="shop-products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>           
        </div>
    )
}

export default Shop