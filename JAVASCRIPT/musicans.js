var musicans = 1;
if (musicans <= 0) {
    console.log('not a group')
} else if (musicans === 1) {
    console.log('solo');
} else if (musicans === 2) {
    console.log('duet');
} else if (musicans === 3) {
    console.log('trio');
} else if (musicans === 4) {
    console.log('duet');
}else if (musicans > 4) {
    console.log('this is a larger group');
}