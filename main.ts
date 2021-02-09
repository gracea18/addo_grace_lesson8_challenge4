while (true) {
    console.log(input.soundLevel() - 14)
    if (input.soundLevel() - 14 > 15) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.rainbowAnimation
    }
    
}
