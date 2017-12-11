var shirtWidth = 18; //Display size S variables
var shirtLength = 28;
var shirtSleeve = 8.13;
var size = ("")
if ((shirtWidth => 18 && shirtWidth < 20) && (shirtLength => 28 && shirtLength < 29) && (shirtSleeve => 8.13 && shirtSleeve <8.38)) {
    (size = "S");
    console.log("Your shirt size is: " + size + ".");
}
else if ((shirtWidth => 20 && shirtWidth < 22) && (shirtLength => 29 && shirtLength < 30) && (shirtSleeve => 8.38 && shirtSleeve < 8.63)) {
    (size = "M");
    console.log("Your shirt size is: " + size + ".");    
}
else if ((shirtWidth === 22) && (shirtLength === 30) && (shirtSleeve === 8.63)) {
    (size = "L");
    console.log("Your shirt size is: " + size + ".");    
}
else if ((shirtWidth === 24) && (shirtLength === 31) && (shirtSleeve === 8.88)) {
    (size = "XL");
    console.log("Your shirt size is: " + size + ".");    
}
else if ((shirtWidth === 26) && (shirtLength === 33) && (shirtSleeve === 9.63)) {
    (size = "2XL");
    console.log("Your shirt size is: " + size + ".");    
}
else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13)) {
    (size = "3XL");
    console.log("Your shirt size is: " + size + ".");    
}
else {
    console.log("N/A");
}