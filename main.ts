let locked = false;
let myInput: number[] = [];
let code: number[] = [];
code = [0,0];
myInput = [];
locked = true;

// Code     //
clearInput();
// Code Eingabe     //



//input.onButtonPressed(Button.B, function () {
//    if (locked) {
//        myInput.push(0);
//        led.plot(myInput.length - 1, 2)
//    }
//})


input.onPinPressed(TouchPin.P0, function () {
    if (locked) {
        myInput.push(0);
        led.plot(myInput.length - 1, 2)
    }
})
input.onPinPressed(TouchPin.P3, function () {
    if (locked) {
        myInput.push(3);
        led.plot(myInput.length - 1, 2)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (locked) {
        myInput.push(2);
        led.plot(myInput.length - 1, 2)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (locked) {
        myInput.push(1);
        led.plot(myInput.length - 1, 2)
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
        basic.clearScreen()
    }
}

function checkCode() {
    if (compareLists()) {
        locked = false
        menue();
    } else {
        music.playTone(Note.C, music.beat())
        clearInput();
    }
    
}

function compareLists() {
    if(code.length == myInput.length) {
        for(let i = 0; i < code.length; i++) {
            if (code[i] != myInput[i]) {
                return false
            }
        }
        return true
    }else {
        return false;
    }
}

function menue() {

    basic.showLeds(`
    # # # # #
    # # # # .
    # . # . #
    # # . # #
    # # # # #
    `)
}

