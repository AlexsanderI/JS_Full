const getSubArray = (arr, numberOfElements) => {
    // put your code here
    let newArr = [];
    for (let i = 0; i <= numberOfElements - 1; i++) {
        // console.log(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
};
console.log(getSubArray([22, 26, 18, 3, 5, 2, 5, 8, 78], 3));