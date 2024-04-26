const ProductCard = () => {
    return (
        <div className="product-card">
            <p>Image</p>
            <h3>Product title</h3>
            <p>Description</p>
            <p>Price</p>
            <div className="quantity-section">
                <button>-</button>
                <input type="number" value="1" />
                <button>+</button>
            </div>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductCard