const buttons = document.querySelectorAll("[data-type='button']");
const screen = document.querySelector("#screen");
const operators = document.querySelectorAll("[data-type='operator']");
// console.log(buttons);

const calculator = {
    leftOperand: '',
    rightOperand: '',
    operator: null,
    result: 0,
    reset: function () {
        this.rightOperand = '';
        this.leftOperand = '';
        this.operator = null;
    },
    display: function () {
        if (this.rightOperand !== '') {
            screen.value = this.rightOperand;
        } else {
            screen.value = this.leftOperand;
        }
    },
    calculate: function () {
        screen.value = solveArith(parseInt(this.leftOperand), parseInt(this.rightOperand), this.operator);
    }
}

function setInput(button) {
    // const leftOperand = calculator.leftOperand;
    const {
        leftOperand,
        operator
    } = calculator;
    if (leftOperand == '' || operator == null) {
        // console.log(button.value);
        calculator.leftOperand += button.value;
    } else {
        calculator.rightOperand += button.value;
    }
    calculator.display();
}

function setOperator(operator) {
    const {
        leftOperand,
        rightOperand,
        operator: opr
    } = calculator;
    if (opr != null && leftOperand != '' && rightOperand != '') {
        calculator.leftOperand = solveArith(parseInt(leftOperand), parseInt(rightOperand), opr);
        calculator.rightOperand = '';
        calculator.display();
    }
    calculator.operator = operator.value;
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
            return x + 0;
            break;
    }
}

function calc() {
    calculator.calculate();
    calculator.reset();
    clearOperator();
}

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (event) {
        setInput(button);
    })
})

operators.forEach(function (operator) {
    // console.log(operator);
    operator.addEventListener('click', function () {
        clearOperator();
        operator.classList.add('bg-brown')
        setOperator(operator);
    })
})

function clearOperator() {
    for (let i = 0; i < operators.length; i++) {
        operators[i].classList.remove('bg-brown');
    }
}

function clearAll() {
    screen.value = '';
    calculator.reset()
}