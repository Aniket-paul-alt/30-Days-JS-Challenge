//Activity 4 - Module Patterns
//Task 6

function createItemManager() {
    const items = []; // Private array to store items

    // Add an item to the collection
    function addItem(item) {
        items.push(item);
        console.log(`Added item: ${item}`);
    }

    // Remove an item from the collection
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`Removed item: ${item}`);
        } else {
            console.log(`Item "${item}" not found.`);
        }
    }

    // List all items in the collection
    function listItems() {
        console.log("Items in the collection:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }

    // Return an object with the public methods
    return {
        addItem,
        removeItem,
        listItems,
    };
}

// Create an instance of the item manager
const myItemManager = createItemManager();

// Add some items
myItemManager.addItem("Apple");
myItemManager.addItem("Banana");
myItemManager.addItem("Cherry");

// List the items
myItemManager.listItems();

// Remove an item
myItemManager.removeItem("Banana");

// List the updated items
myItemManager.listItems();
