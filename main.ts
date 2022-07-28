let locked = false;
let myInput: number[] = [];
let code = [0, 1, 2, 3];
myInput = [1, 0];
locked = true;

// Code     //
clearInput();



// Code Eingabe     //
input.onPinPressed(TouchPin.P0, function () {
    if (locked) {
        myInput.push(0);
    }
})
input.onPinPressed(TouchPin.P3, function () {
    if (locked) {
        myInput.push(3);
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (locked) {
        myInput.push(2);
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (locked) {
        myInput.push(1);
    }
})

input.onButtonPressed(Button.A, function () {
    if (locked) {
        checkCode();
    }
})

// Hilfsfunktionen     //

function clearInput () {
    for (let index = 0; index < myInput.length; index++) {
        myInput.pop();
    }
}

function checkCode() {
    compareLists();
}

function compareLists() {
    if(code.length == myInput.length) {
        for(let i = 0; i < code.length; i++) {
            if 
        }
        return true
    }else {
        return false;
    }
}