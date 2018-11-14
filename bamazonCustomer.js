//Required Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');
//Connection Script
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	//your username
	user: "root",
	//Your password
	password: "Malibu44!",
	database: "bamazon_db"
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("Connected!  ID# " + connection.threadId);

	startPrompt();
});
// Display The Inventory & Details
function startPrompt() {

	inquirer.prompt([{

		type: "confirm",
		name: "confirm",
		message: "Welcome to Bamazon!  Would you like to see what we have for sale today?",
		default: true

	}]).then(function (user) {
		if (user.confirm === true) {
			inventory();
		} else {
			console.log("Thank you...Have a Nice Day!");
		}
	});
}

function inventory() {
	//instantiate
	var table = new Table({
		head: ["ID", "Item", "Department", "Price", "Quantity"],
		colWidths: [8, 25, 25, 15, 15]
	});

	listInventory();
	// table is an Array, so you can 'push'...
	function listInventory() {
		//create variables from database

		connection.query("SELECT * FROM products", function (err, res) {
			for (var i = 0; i < res.length; i++) {

				var itemId = res[i].item_id,
					productName = res[i].product_name,
					departmentName = res[i].department_name,
					price = res[i].price,
					stockQuantity = res[i].stock_quantity;

				table.push(
					[itemId, productName, departmentName, price, stockQuantity]
				);
			}

			console.log(table.toString());
			console.log("");

			continuePrompt();
		});
	}
}

//Prompt User to Purchase

function continuePrompt() {

	inquirer.prompt([{

		type: "confirm",
		name: "continue",
		message: "Would you like to purchase any of our items?",
		default: true
	}]).then(function (user) {
		if (user.continue === true) {
			selectionPrompt();
		} else {
			console.log("Thank you.  Have a nice day");
		}
	});
}

function selectionPrompt() {

	inquirer.prompt([{

		name: "inputId",
		type: "input",
		message: "Please enter the Item Number of the product you would like to purchase"
	},
	{
		name: "inputNumber",
		type: "input",
		message: "How many would you like?",

	}])

		.then(function (userPurchase) {

			//we will now query the DB to make sure the selected item has the desired quantity in stock

			connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function (err, res) {
				if (err) throw err;

				for (var i = 0; i < res.length; i++) {
					
					if (userPurchase.inputNumber > res[i].stock_quantity) {

						console.log("We do not have the item you requested in stock at that quantity.  Please try another quantity.");

						startPrompt();
					} else {
						//list item information for user to confirm

						console.log("Your order has been accepted.");

						console.log("You selected " + userPurchase.inputNumber + res[i].product_name);

						console.log(" from " + res[i].department_name + ", at $" + res[i].price);

						console.log(" for a total price of: $" + res[i].price * userPurchase.inputNumber);

						var newStock = (res[i].stock_quantity - userPurchase.inputNumber);

						var purchaseId = (userPurchase.inputId);

						confirmPrompt(newStock, purchaseId);
					}
				}
			});
		});
}

//confirm purchase to user

function confirmPrompt(newStock, purchaseId) {
	inquirer.prompt([{
		name: "confirmPurchase",
		type: "confirm",
		message: "Is the information above correct?",
		default: true
	}]).then(function (userConfirm) {
		if (userConfirm.confirmPurchase === true) {

			//if true, this will update the mysql database with new stock quantity

			connection.query("UPDATE products SET ? WHERE ?", [{
				stock_quantity: newStock
			}, {
				item_id: purchaseId
			}], function (err, res) { });

			console.log("Thank you.  Your purchase has been confirmed");

			startPrompt();
		} else {
			console.log("Thank you. Please shop again soon");

			startPrompt();
		}
	});
}