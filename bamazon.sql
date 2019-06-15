CREATE database bamazon;

USE bamazon; 

CREATE TABLE products (
    item_id INT(4) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(15) NOT NULL,
    PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (107,"graphics card","hardware", 300.00, 10),
        (210,"red dead redemption 2", "game", 59.99, 15),
        (337, "headset", "accessories", 80.00, 8),
        (480,"csgo", "game", 14.99, 15),
        (505,"motherboard", "hardware", 145.00, 5),
        (617, "mouse", "accessories", 45.00, 8),
        (750,"ram", "hardware", 155.00, 2),
        (818, "hard drive", "hardware", 112.00, 12),
        (912,"halo", "game", 19.99, 10),
        (1040, "keyboard", "accessories", 34.99, 1)