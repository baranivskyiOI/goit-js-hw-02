function getCommonElements(array1, array2) {
    const sameElementsArray = [];

    for (let i = 0; i <= array1.length; i++){
        if (array1.includes(array2[i])) {
            sameElementsArray.push(array2[i])
        }
    }
    return sameElementsArray
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
