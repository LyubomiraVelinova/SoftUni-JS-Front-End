function register(input) {
    let heroes = [];
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        heroes.push({name, level, items});
    }
    let sortedHeroes = heroes.sort((aNum, bNum) => aNum.level - bNum.level);
    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}

register([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);