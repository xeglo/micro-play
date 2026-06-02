joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_SPACE, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if ("" == "") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "Error 2") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "Initialize controller") {
        basic.showLeds(`
            . . # # .
            # . # . #
            . # # # #
            # . # . #
            . . # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    }
})
function Lock () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # # # # #
        # # . # #
        # # # # #
        `)
    basic.pause(100)
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 317, 131, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # # . # #
        # # # # #
        `)
}
function Error_1 () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showString("Error 1 : No Cartridge Detected. please enter a cartridge.")
    RBTFT18.showString(
    "No Cartridge.",
    0,
    0,
    0,
    Color.Red,
    Color.Black
    )
    WaitUntilBlocks.waitUntilButtonReleased(Button.B)
}
function Error_2 () {
    radio.sendString("Error 2")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    music.play(music.stringPlayable("C5 - C5 - C5 - - - ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
}
RBTFT18.init()
joyfrog.joyfrog_init()
radio.sendString("Initialize controller")
basic.showIcon(IconNames.Happy)
RBTFT18.showString(
"Micro:Play",
0,
0,
0,
Color.Blue,
Color.Black
)
music.play(music.stringPlayable("C D E - - - - - ", 120), music.PlaybackMode.UntilDone)
RBTFT18.clearScreen()
if (input.temperature() == 50 || input.temperature() > 50) {
    Error_2()
}
let Game_list = ["Tetris", "Walls", "Cartridge"]
basic.forever(function () {
    if (input.temperature() == 50 || input.temperature() > 50) {
        Error_2()
    }
})
