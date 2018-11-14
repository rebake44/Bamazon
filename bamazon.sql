-- drops the database if it EXISTS --
DROP DATABASE IF EXISTS bamazon_db;
-- creates new database --
CREATE DATABASE bamazon_db;

-- makes it so all of the following code will affect bamazon_db --

USE bamazon_db;

-- creates table within bamazon --
CREATE TABLE products (
    -- makes a string column called "id" which cannot be null
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    -- makes a string column
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    -- numeric column
    price DECIMAL(10,2),
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
    );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread Knife", "Kitchen Items", 29.99, 205);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leaf Blower", "Lawn and Garden", 179.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Copy Paper", "Office Supplies", 4.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ladies blouse", "Women's Clothing", 32.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rubber Boots", "Footwear", 78.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nylon Tent", "Camping and Outdoor", 54.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socket Wrench", "Hardware", 12.39, 124);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Leash", "Pet Supplies", 10.99, 305);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Trousers", "Men's Clothing", 49.29, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (products, "Steam Iron", "Household", 79.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Double Stroller", "Baby", 129.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calculator", "Electronics", 9.25, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony Laptop", "Computers", 629.99, 104);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Into Thin Air", "Books", 15.45, 750);

SELECT * FROM products;