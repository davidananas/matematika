input.onButtonPressed(Button.A, function () {
    vstup += 1
    basic.showString("" + (vstup))
})
input.onPinPressed(TouchPin.P2, function () {
    if (scitani == 0) {
        basic.showString("ODCITANI")
        scitani = 1
    } else {
        basic.showString("SCITANI")
        scitani = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    pocitani()
})
input.onButtonPressed(Button.B, function () {
    if (scitani == 0) {
        if (cislo1 + cislo2 == vstup) {
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
            nastav()
            basic.pause(500)
            pocitani()
        } else {
            basic.showIcon(IconNames.No)
            game.removeLife(1)
            nastav()
            basic.pause(500)
            pocitani()
        }
    } else {
        if (cislo_od - cislo_1_od == vstup) {
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
            nastav()
            basic.pause(500)
            pocitani()
        } else {
            basic.showIcon(IconNames.No)
            game.removeLife(1)
            basic.showNumber(cislo_od - cislo_1_od)
            nastav()
            basic.pause(500)
            pocitani()
        }
    }
})
function nastav () {
    if (scitani == 0) {
        vstup = 0
        cislo1 = randint(0, 5)
        cislo2 = randint(0, 5)
    } else {
        cislo_od = randint(0, 10)
        cislo_1_od = randint(0, cislo_od)
        vstup = 0
    }
}
function pocitani () {
    if (scitani == 0) {
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
    } else {
        basic.showString("" + (cislo_od))
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showString("" + (cislo_1_od))
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let cislo_od = 0
let cislo_1_od = 0
let cislo2 = 0
let cislo1 = 0
let vstup = 0
let scitani = 0
game.setLife(3)
game.setScore(0)
scitani = 0
vstup = 0
if (scitani == 0) {
    cislo1 = randint(0, 5)
    cislo2 = randint(0, 5)
} else {
    cislo_1_od = randint(0, 10)
    cislo_od = randint(0, cislo_od)
}
