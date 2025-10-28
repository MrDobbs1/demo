    
    function removeDuplicates(arr) {

    let uniqueSet = new Set(arr);

    let uniqueArray = [...uniqueSet];

    return uniqueArray.sort((a, b) => a - b);
    }


console.log(removeDuplicates([10, 20, 20, 30, 40, 50, 50]));
