// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    H = 0,
    Q = 0,  
    D = 0,
    N = 0,
    P = 0;
    arr = {};
    number = currency;
    if (number == 0 ) {
        number = arr;
        console.log(number);
    } else if (number > 10000) {
        arr.error = "You are rich, my friend! We don't have so much coins for exchange";
        number = arr;
        console.log(number);
        return number;
    };

    if (number >= 50) {
        H = Math.floor(number / 50);
        number = number % 50;
         if (H !== 0) {
            arr.H = H;
         };
    };

    if (number >= 25) {
        Q = Math.floor(number / 25);
        number = number % 25;
        if (Q !== 0) {
            arr.Q = Q;
         };
    };

    if (number >= 10) {
        D = Math.floor(number / 10);
        number = number % 10;
        if (D !== 0) {
            arr.D = D;
         };
    };

    if (number >= 5) {
        N = Math.floor(number / 5);
        number = number % 5;
        if (N !== 0) {
            arr.N = N;
         };
    };

    if (number >= 1) {
        P = number;
        arr.P = P;
    };
    return arr;
}
