function solve(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const line of array) {
        let [name, age] = line.split(' ');
        age = Number(age);
        new Cat(name, age).meow();
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
