while True:
    print(input.sound_level() - 14)
    if (input.sound_level()- 14) > 15:
        light.set_all(light.rgb(255,255,255))
    else:
        light.rainbow_animation
