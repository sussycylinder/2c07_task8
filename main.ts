input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
    }
})
basic.forever(function () {
    if (input.compassHeading() >= 315 || input.compassHeading() <= 45) {
        basic.showString("N")
    } else if (input.compassHeading() >= 45 && input.compassHeading() <= 135) {
        basic.showString("E")
    } else if (input.compassHeading() >= 135 && input.compassHeading() <= 225) {
        basic.showString("S")
    } else if (input.compassHeading() >= 225 && input.compassHeading() <= 315) {
        basic.showString("W")
    }
})
