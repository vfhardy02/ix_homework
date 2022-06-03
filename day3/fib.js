/**
 * 
 * @param {*} prevone 
 * @param {*} prevtwo 
 * @param {*} ctr 
 */
function fib(prevone, prevtwo, ctr) {

    if (prevtwo == 0) {
        document.write(prevtwo+", "+prevone+", ");
    }

    let fibnumber = prevone + prevtwo;
    document.write(fibnumber); //can fix to remove comma on the 10th run
    
    if (ctr != 10) {
        document.write(", ");
    }

    if (ctr < 10) {
        let count = ctr + 1;
        fib(fibnumber, prevone, count);
    }
}

fib(1, 0, 3);