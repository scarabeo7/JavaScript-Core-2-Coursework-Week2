function shoppingList(arrayOfList) {
    let content = document.getElementById("content");
    let unorderedList = document.createElement("ul");
    let shoppingItem;
    content.appendChild(unorderedList);
    arrayOfList.forEach(item => {
        shoppingItem = document.createElement("li");
        shoppingItem.innerText = item;
        unorderedList.appendChild(shoppingItem);
    })

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);