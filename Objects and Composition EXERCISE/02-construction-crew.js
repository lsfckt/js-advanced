function constructionCrew(obj) {
    // If you receive a worker whose dizziness property is set to true it means he needs to intake some water to be able to work correctly.
    if (obj.dizziness === true) {
        // The required amount is 0.1ml per kilogram per year of experience.
        const waterNeeded = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += waterNeeded;
        obj.dizziness = false;
    }

    console.log(obj);
    return obj;
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
//   { weight: 80,
//     experience: 1,
//     levelOfHydrated: 8,
//     dizziness: false }

constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});
//   { weight: 120,
//     experience: 20,
//     levelOfHydrated: 440,
//     dizziness: false }

constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});
// { weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false }

