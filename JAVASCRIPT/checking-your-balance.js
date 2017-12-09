var checkBalance = (true);
var balance = (325.00);
var isActive = (true);
if (checkBalance === true) {
    if (balance > 0 && isActive === true) {
        console.log("Your balance is $ " + balance.toFixed(2) + ".");
    }
    else if (account === false) {
        console.log("Your Account is no longer active");
    }
    else if (balance === 0) {
        console.log("Your Account is empty");
    }
    else if (balance < 0) {
        console.log("Your balance is negative. Please contact bank.");
    }
}
else {
    console.log("Thank You. Have a nice day!")
}