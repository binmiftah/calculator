const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('#screen');
const operators = document.querySelectorAll('.operator')

buttons.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click', function(event) {
        // console.log(event);
        const newEvent = event.target.value;
        screen.value += newEvent;
    });
});

operators.forEach(function(operator) {
    operator.addEventListener('click', function(event) {
        // console.log(event.target.value);
        selectedOperator = event.target.value;
    })
})

function calc() {
    const text = screen.value;
    const textArray = text.split(selectedOperator);
    screen.value = solveArith(parseInt(textArray[0]) , parseInt(textArray[1]), selectedOperator);
}

function solveArith(x, y, selectedOperator) {
    switch (selectedOperator) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
    
        default: 
            return x + y;
            break;
    }
}