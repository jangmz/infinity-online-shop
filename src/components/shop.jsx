import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import ErrorPage from "./error-page"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // add sorting state and function that call the API -> has sorting feature

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
                <ProductCard key={product.id} product={product} />
            ))}
            
        </div>
    )
}

export default Shop