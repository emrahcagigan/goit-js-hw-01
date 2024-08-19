
function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} droids worth ${
      quantity * pricePerDroid
    } credits!`;
}

    console.log(makeTransaction(5, 3000)); //15000
    console.log(makeTransaction(3, 1000)); //3000
    console.log(makeTransaction(10, 500)); //5000