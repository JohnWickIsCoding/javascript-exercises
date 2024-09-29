const removeFromArray = function(array, ...theArgs) {

    let removeCounter = 0

    for (const arg of theArgs) {
        for (i = 0; i < array.length; i++) {
            if(array[i] === arg) {
                array.splice(i, 1)
                array.unshift("")
                removeCounter++
            }
        }
    }

    for (i = 0; i < removeCounter; i++) {
        array.shift()
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
