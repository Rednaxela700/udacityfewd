var balance = (325.00);
var checkBalance = (true);
var isActive = (true);

if (checkBalance === true) {
    if (balance > 0 && isActive === true) {
        console.log("Your balance is $ " + balance.toFixed(2) + ".");
    }
    else if (checkBalance === true && isActive === false) {
        console.log("Your Account is no longer active");
    }
    else if (checkBalance === true && isActive === true && balance === 0) {
        console.log("Your Account is empty");
    }
    else if (checkBalance === true && isActive === true && balance < 0) {
        console.log("Your balance is negative. Please contact bank.");
    }
    else if (!checkBalance) {
        console.log("Thank You. Have a nice day!")
    }
}