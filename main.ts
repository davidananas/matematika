input.onButtonPressed(Button.A, function () {
    vstup += 1
    basic.showString("" + (vstup))
})
input.onButtonPressed(Button.AB, function () {
    pocitani()
})
input.onButtonPressed(Button.B, function () {
    if (scitani == 0) {
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
    } else {
        if (true) {
        	
        }
    }
})
function nastav () {
    if (scitani == 0) {
        vstup = 0
        cislo1 = randint(0, 5)
        cislo2 = randint(0, 5)
    } else {
    	
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
scitani = 0
vstup = 0
if (scitani == 0) {
    cislo1 = randint(0, 5)
    cislo2 = randint(0, 5)
} else {
    cislo_1_od = 0
    cislo_od = 0
}
