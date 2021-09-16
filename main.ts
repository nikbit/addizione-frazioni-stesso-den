let n1 = 0
let n2 = 0
let d = 0
input.onButtonPressed(Button.A, function () {
    n1 = randint(1, 20)
    n2 = randint(1, 20)
    d = randint(2, 20)
    basic.showNumber(n1)
    basic.showString("/")
    basic.showNumber(d)
    basic.showString("+")
    basic.showNumber(n2)
    basic.showString("/")
    basic.showNumber(d)
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(n1 + n2)
    basic.showString("/")
    basic.showNumber(d)
    basic.showIcon(IconNames.Happy)
})
