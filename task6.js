import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Type your code below this line!

function ShoppingList() {
    this.items = [];

    this.addItem = function(item, quantity) {
        this.items.push({
            item: item,
            quantity: quantity,
        });
    };
    this.printList = function() {
        console.log(this.items);
    };
}

const shoppingList = new ShoppingList();

const num = Number(prompt("How many items do you have?: "));    
for (let i = 0; i < num; i++) {
    const item = prompt("Enter an item: ");
    const quantity = prompt("Enter a quantity: ");
    const exists = shoppingList.items.some(obj => obj.item === item);
    if (exists) {
        console.log("Item already exists");
        continue;
    }
    shoppingList.addItem(item,quantity);}


shoppingList.printList();


// Type your code above this line!

