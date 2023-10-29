function juiceFlavor(arr) {

    const obj = new Map;
    const bottles = new Map;

    arr.forEach(line => {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!obj.has(juice)) {
            obj.set(juice, quantity);

        } else {
            let juiceQ = obj.get(juice);
            juiceQ += quantity;

            obj.set(juice, juiceQ);
        }

        let left = obj.get(juice);

        while (left >= 1000) {
            if (!bottles.has(juice)) {
                bottles.set(juice, 1);

            } else {
                let botCount = bottles.get(juice);
                bottles.set(juice, botCount + 1);
            }
            left -= 1000;
        }

        obj.set(juice, left);
    });

    Array.from(bottles).forEach(([key, value]) => {
        console.log(`${key} => ${value}`);
    });
}
juiceFlavor(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
// Pear => 8
// Watermelon => 10
// Kiwi => 4

