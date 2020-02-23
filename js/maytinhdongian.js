let number1 = '';
let number2 = '';
let isPress;
let isCalculated;
let operator;

function passAdd() {
    isPress = 1;
    operator = '+';
    document.getElementById('display').value += '+';

}

function passSubtract() {
    isPress = 1;
    operator = '-';
    document.getElementById('display').value += '-';

}

function passMultiply() {
    isPress = 1;
    operator = 'x';
    document.getElementById('display').value += 'x';

}

function passDivide() {
    isPress = 1;
    operator = '/';
    document.getElementById('display').value += '/';

}

function passValue1() {

    if (isPress == 1) {
        number2 += '1';
    } else {
        number1 += '1';
    }
    document.getElementById('display').value += '1';

}

function passValue2() {
    if (isPress == 1) {
        number2 += '2';
    } else {
        number1 += '2';
    }
    document.getElementById('display').value += '2';
}

function passValue3() {
    if (isPress == 1) {
        number2 += '3';
    } else {
        number1 += '3';
    }
    document.getElementById('display').value += '3';
}

function passValue4() {
    if (isPress == 1) {
        number2 += '4';
    } else {
        number1 += '4';
    }
    document.getElementById('display').value += '4';
}

function passValue5() {
    if (isPress == 1) {
        number2 += '5';
    } else {
        number1 += '5';
    }
    document.getElementById('display').value += '5';
}

function passValue6() {
    if (isPress == 6) {
        number2 += '1';
    } else {
        number1 += '6';
    }
    document.getElementById('display').value += '6';
}

function passValue7() {
    if (isPress == 1) {
        number2 += '7';
    } else {
        number1 += '7';
    }
    document.getElementById('display').value += '7';
}

function passValue8() {
    if (isPress == 1) {
        number2 += '8';
    } else {
        number1 += '8';
    }
    document.getElementById('display').value += '8';
}

function passValue9() {
    if (isPress == 1) {
        number2 += '9';
    } else {
        number1 += '9';
    }
    document.getElementById('display').value += '9';
}

function passValue0() {
    if (isPress == 1) {
        number2 += '0';
    } else {
        number1 += '0';
    }
    document.getElementById('display').value += '0';
}
function deleteCharacter() {
    let str = document.getElementById('display').value;
    str = str.substring(0, str.length -1 );
    document.getElementById('display').value =str;


}
function calculate() {
    let result;
    if (operator == '+') {
        result = parseInt(number1) + parseInt(number2);
        document.getElementById('display').value = result;

    }
    if (operator == '-') {
        result = parseInt(number1) - parseInt(number2);
        document.getElementById('display').value = result;

    }
    if (operator == 'x') {
        result = parseInt(number1) * parseInt(number2);
        document.getElementById('display').value = result;

    }
    if (operator == '/') {
        result = parseInt(number1) / parseInt(number2);
        document.getElementById('display').value = result;

    }
    isCalculated = 1;
}