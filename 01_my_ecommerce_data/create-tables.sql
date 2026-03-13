CREATE TABLE products (
    product_id VARCHAR(50) PRIMARY KEY, 
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,      
    in_stock BOOLEAN DEFAULT TRUE      
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,       
    product_id VARCHAR(50) REFERENCES products(product_id), 
    quantity INTEGER NOT NULL CHECK (quantity > 0)
);