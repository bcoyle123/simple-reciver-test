radio.onReceivedString(function (receivedString) {
    if (receivedString == "on") {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (receivedString == "off") {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 135)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        left_right = value
    }
    if (name == "y") {
        forward_back = value
    }
})
let forward_back = 0
let left_right = 0
radio.setGroup(2)
basic.forever(function () {
    basic.showIcon(IconNames.Rollerskate)
    if (Math.abs(left_right) < Math.abs(forward_back)) {
        if (forward_back < -400) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        }
        if (forward_back < 400) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
        }
        if (forward_back > -400) {
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor3)
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor4)
        }
    }
})
