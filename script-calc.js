function calc() {
    let a =+prompt('Enter first numder','0'),
        b =+prompt('Enter second numder','0'),
        addition =a + b,
        subtraction =a - b,
        multiplication =a * b,
        division =a / b,
        RemOfDivision =a % b;
alert(a + '+' + b + '=' + addition);  
alert(a + '-' + b + '=' + subtraction);
alert(a + '*' + b + '=' + multiplication);
alert(a + '/' + b + '=' + division);
alert('Remainder of the division ' + a + ' and ' + b + '=' + RemOfDivision);
}
calc();