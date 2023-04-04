function shoppingList(input) {
    let groceriesList = input.shift().split('!');

    let commandParser = {
        'Urgent': addUrgentItem,
        'Unnecessary': deleteItem,
        'Correct': changeItemName,
        'Rearrange': rearrangeItem,
    }

    input.forEach(line => {
        if (line === 'Go Shopping!') {
            return
        }

        let [command, ...items] = line.split(' ');
        groceriesList = commandParser[command](...items);
    });
    console.log(groceriesList.join(', '));

    function addUrgentItem(item) {
        if (!checkItem(item)) {
            groceriesList.unshift(item);
        }
        return groceriesList;
    }

    function deleteItem(item) {
        if (checkItem(item)) {
            groceriesList = groceriesList.filter(word => word !== item);
        }
        return groceriesList;
    }

    function changeItemName(oldItem, newItem) {
        if (checkItem(oldItem)) {
            groceriesList = groceriesList.map(el => {
                if (el === oldItem) {
                    el = newItem;
                    // OR return newItem;
                }
                return el;
            });
        }
        return groceriesList;
    }

    function rearrangeItem(item) {
        if (checkItem(item)) {
            groceriesList = groceriesList.filter(word => word !== item);
            groceriesList.push(item);
        }
        return groceriesList;
    }

    function checkItem(item) {
        if (groceriesList.includes(item)) {
            return true;
        } else {
            return false;
        }
    }
}

shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)