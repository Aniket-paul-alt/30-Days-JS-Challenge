//Activity 5 - Private fields
//Task 9

class Account {
    constructor(initialBalance) {
        // Private field for balance
        let balance = initialBalance;

        // Method to deposit money
        this.deposit = (amount) => {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited ${amount} units. New balance: ${balance}`);
            } else {
                console.log("Invalid deposit amount. Please provide a positive value.");
            }
        };

        // Method to withdraw money
        this.withdraw = (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn ${amount} units. New balance: ${balance}`);
            } else {
                console.log("Insufficient funds or invalid withdrawal amount.");
            }
        };

        // Getter for balance (optional)
        this.getBalance = () => balance;
    }
}

// Example usage
const myAccount = new Account(1000); // Initial balance of 1000 units
myAccount.deposit(200); // Deposited 200 units. New balance: 1200
myAccount.withdraw(150); // Withdrawn 150 units. New balance: 1050
console.log("Current balance:", myAccount.getBalance()); // Current balance: 1050

//Task 10
class Account2 {
    constructor(initialBalance) {
        let balance = initialBalance;

        this.deposit = (amount) => {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited ${amount} units. New balance: ${balance}`);
            } else {
                console.log("Invalid deposit amount. Please provide a positive value.");
            }
        };

        this.withdraw = (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn ${amount} units. New balance: ${balance}`);
            } else {
                console.log("Insufficient funds or invalid withdrawal amount.");
            }
        };

        this.getBalance = () => balance;
    }
}

// Create an account with an initial balance of 1000 units
const myAccount2 = new Account2(2000);

// Deposit 200 units
myAccount2.deposit(3000); // Deposited 200 units. New balance: 1200

// Withdraw 150 units
myAccount2.withdraw(1500); // Withdrawn 150 units. New balance: 1050

// Check the current balance
console.log("Current balance:", myAccount2.getBalance()); // Current balance: 1050
