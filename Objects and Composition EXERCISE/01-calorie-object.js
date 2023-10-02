function calorieObject(arr) {

    const calories = {};

    for (let i = 0; i < arr.length; i += 2) {
        calories[arr[i]] = Number(arr[i + 1]);
    }

    console.log(calories);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// { Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }