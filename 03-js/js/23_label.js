// list out prime numbers from 1 - 100
loop1:
for( let num = 2; num <= 100; num++ ) {
    loop2:
    for( let divisor = 2; divisor < num / 2; divisor++ ) {
        if( num % divisor === 0 ) {
            //continue loop1; // goes to next iteration of loop1 instead of loop2
            break loop1;
        }
    }

    console.log( num );
}