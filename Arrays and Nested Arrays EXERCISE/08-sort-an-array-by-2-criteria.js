function sortAnArrayByTwoCriteria(arr) {
/**Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in 
 ascending order as second criteria. The comparison should be case-insensitive.
 */
    const sortedArr = arr.sort((a, b) => {
        
        const c = a.length - b.length;
        const d = a.localeCompare(b);
        return c || d; 
     
    })
    console.log(sortedArr.join('\n'));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// beta alpha gamma

sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// Jack Isacc George Theodor Harrison

sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);
// Deny omen test Default

