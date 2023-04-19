function solve(array) {
    let targets = {};
    let eventsParser = {
        'Plunder': plunderHandler,
        'Prosper': prosperHandler,
    }
    while (array) {
        let line = array.shift();
        if (line === 'Sail') {
            break
        }
        const [cities, population, gold] = line.split('||');
        if (!targets.hasOwnProperty(cities)) {
            targets[cities] = { population: Number(population), gold: Number(gold) };
        } else {
            targets[cities]['population'] += Number(population);
            targets[cities]['gold'] += Number(gold);
        }
    }
    for (const event of array) {
        if (event === 'End' && Object.keys(targets).length) {
            console.log(`Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`)
            for (const key in targets) {
                console.log(`${key} -> Population: ${targets[key].population} citizens, Gold: ${targets[key].gold} kg`);
            }
            return
        } else if (event === 'End' && !Object.keys(targets).length) {
            console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
            return
        }
        let others = event.split('=>');
        let fact = others.shift();

        eventsParser[fact](...others);
    }

    function plunderHandler(town, people, gold) {
        // if (targets[town].population >= Number(people) && targets[town].gold >= Number(gold)) {}
        targets[town].population -= Number(people);
        targets[town].gold -= Number(gold);
        console.log(`${town} plundered! ${Number(gold)} gold stolen, ${Number(people)} citizens killed.`);

        if (targets[town].population === 0 || targets[town].gold === 0) {
            delete targets[town];
            console.log(`${town} has been wiped off the map!`);
        }
    }

    function prosperHandler(givenTown, givenGold) {
        givenGold = Number(givenGold)
        if (Number(givenGold) < 0) {
            console.log(`Gold added cannot be a negative number!`)
        } else {
            targets[givenTown].gold += Number(givenGold);
            console.log(`${Number(givenGold)} gold added to the city treasury. ${givenTown} now has ${targets[givenTown].gold} gold.`)
        }
    }
}


solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)

// solve(["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"]
// )