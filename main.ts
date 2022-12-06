input.onButtonPressed(Button.A, function () {
    vstup += 1
    basic.showString("" + (vstup))
})
input.onButtonPressed(Button.AB, function () {
    pocitani()
})
input.onButtonPressed(Button.B, function () {
    if (cislo1 + cislo2 == vstup) {
        basic.showIcon(IconNames.Yes)
        nastav()
        basic.pause(500)
        pocitani()
    } else {
        basic.showIcon(IconNames.No)
        nastav()
        basic.pause(500)
        pocitani()
    }
})
function nastav () {
    vstup = 0
    cislo1 = randint(0, 5)
    cislo2 = randint(0, 5)
}
function pocitani () {
    basic.showString("" + (cislo1))
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("" + (cislo2))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let cislo2 = 0
let cislo1 = 0
let vstup = 0
vstup = 0
cislo1 = randint(0, 5)
cislo2 = randint(0, 5)
