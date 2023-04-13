/**
 * 
 * @param {string} action 
 * @param {Array} arr 
 * @returns 
 */
function performAction(action, arr) {
    switch (action) {
        case "Odd":
            return arr.filter(e => e % 2 === 0)
        case "Even":
            return arr.filter(e => e % 2 === 0)
        case "Add":
            let intialVal = 5
            return arr.reduce((total, elementOfArray) => total + elementOfArray, intialVal)
        default:
            return arr.filter(e => e > 0)
    }
}

// console.log("Odd response- " + performAction("Odd", arr));
// console.log("Even response- " + performAction("Even", arr));
// console.log("Addition response- " + performAction("Add", arr));
// console.log("Natural Reponse- " + performAction("Natural", arr));

/**
 * 
 * @param {Array[string]} arr 
 * @param {string} stringToSearch
 */
function performActionV2(arr, stringToSearch) {
    /**
     * 1. array of string ["Suyash", "Kumar", "Sukumar", "Sujai"]
     * 2. stringToSearch --> "Su" (Any String)
     * 3. array mei se filter karna hai --> string jo "stringToSearch" include karti hai
     * 
     * SAMPLE 1- 
     * arr= ["Suyash", "Kumar", "sukumar", "sujai"]
     * stringToSearch = "Su"
     * 
     * return --> ["Suyash", "Kumar", "sukumar", "sujai"]
     * 
     * SAMPLE 2- 
     * arr= ["Suyash", "Kumar", "sukumar", "sujai"]
     * stringToSearch = "Suy"
     * 
     * return --> ["Suyash"]
     */

    stringToSearch = stringToSearch.toLowerCase()
    arr = arr.map(e => e.toLowerCase())

    var newarr = arr.filter((element) => {
        return element.includes(stringToSearch);
    });

    return JSON.stringify(newarr)
}

console.log(`Sample Reponse value1- ${performActionV2(["Suyash", "Kumar", "Sukumar", "Sujai"], "Su")}`);
console.log(`Sample Reponse value2- ${performActionV2(["Suyash", "Kumar", "Sukumar", "Sujai"], "kumar")}`);