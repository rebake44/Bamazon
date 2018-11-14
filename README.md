## Bamazon - CLI Application using Node.js and MySQL


## Bamazon Description

Welcome to Bamazon! This application implements a simple command line based storefront using:
- Node.js
- JavaScript
- npm Inquirer package
- MySQL database backend
- npm MySQL package
- npm cli-table3 package

## MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on your machine.  If you don't, visit the [MySQL installation page] (https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system.  Once you have MySQL installed, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [bamazon.sql](insert bamazon.sql github link here).  Run this code inside your MySQL client to populate the database, then you will be ready to proceed with running the Bamazon customer interface.

## Bamazon Customer Instructions

The application allows the customer to view the entire inventory of store items by displaying the following:
Item ID, Item Name, Department, Price and Quantity

If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database.  If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow these steps:

- git clone git@github.com:rebake44/bamazon.git
- cd bamazon
- npm install
- node bamazonCustomer.js

## Bamazon Demo

You may download and watch the demo of the Bamazon customer interface using the link below.

[Bamazon Demo](youtube link here)
