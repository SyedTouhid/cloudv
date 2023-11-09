function sortDescending(inputArray) {
    // Sorting in descending order
    inputArray.sort(function(a, b) {
        return b - a;
    });

    // Display the sorted array
    console.log("Sorted Array (Descending Order):", inputArray);
}

// Example usage:
var inputArray = [10, 5, 8, 2, 7];
sortDescending(inputArray);