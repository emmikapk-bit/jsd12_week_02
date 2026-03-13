SELECT 
    p.product_name, 
    c.quantity, 
    (p.price * c.quantity) AS total_price
FROM cart c
JOIN products p ON c.product_id = p.product_id;