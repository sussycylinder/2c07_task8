input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showArrow(input.compassHeading())
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    randint(0, 5000),
    randint(0, 5000),
    255,
    255,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
})
