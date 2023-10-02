function heroicInventory(arr) {

    const heroRegister = [];

    arr.forEach(element => {
        const splitedEl = element.split(' / ');
        const [heroName, level, ...items] = splitedEl;
        const splitedItems = items.join('').split(', ');

        let hasItems = items.length > 0 ? splitedItems : [];

        heroRegister.push({
            name: heroName,
            level: Number(level),
            items: hasItems,
        });
    });
    console.log(JSON.stringify(heroRegister));
}
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

heroicInventory(['Jake / 1000']);
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]