const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

let displayProducts = function () {
    let query = "Select * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("res", res);
        purchasePrompt();
    });
}

function purchasePrompt() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Enter the ID you would like to purchace",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How may itmes do you want?",
            filter: Number
        },
    ]).then(function (answers) {
        const quantityNeeded = answers.Quantity;
        const IDrequested = answers.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};

function purchaseOrder(ID, amtNeeded) {
    connection.query(`Select * FROM products WHERE item_id = ${ID}`, function (err, res) {
        if (err) { console.log(err) };
        if (amtNeeded <= res[0].stock_quantity) {
            var totalCost = res[0].price * amtNeeded;
            console.log("Good news your order is in stock!");
            console.log("Your total cost for " + amtNeeded + " " + res[0].product_name + " is " + totalCost + " Thank you!");

            connection.query(`UPDATE products SET stock_quantity = stock_quantity - ${amtNeeded} WHERE item_id = ${ID}`);
        } else {
            console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
        };
        displayProducts();
    });
};

displayProducts(); 