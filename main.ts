input.onButtonPressed(Button.A, function () {
    basic.showString("Hello! What's your name?")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hi! My name is Eric Lin.")
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
