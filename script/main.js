import * as audio_handler from './audio_handler.js'
import * as image_handler from './image_handler.js'

const thomas_list =
    [
        "bicot", "blanco", "gwer",
        "shallom", "macron", "woke",
        "alien", "dimanche"
    ];

const spin_btn = document.querySelector("#spin_btn");
spin_btn.addEventListener("click", spin_the_wheel);

function spin_the_wheel()
{
    image_handler.apply_style('animation', "flotte 0.8s ease-in-out infinite ")

    audio_handler.pause_sound()

    audio_handler.play_sound('very_humoristic_drum_roll', 0.4)

    let spins = 22;
    let intervalTime = 100;
    let currentSpin = 0;

    const spinner = setInterval(() =>
    {
        const randomIndex = Math.floor(Math.random() * thomas_list.length);
        image_handler.set_src(thomas_list[randomIndex]);

        currentSpin++;

        if (currentSpin === spins - 5) intervalTime = 200;
        if (currentSpin === spins - 2) intervalTime = 400;

        if (currentSpin >= spins)
        {
            clearInterval(spinner);

            let finalIndex = Math.floor(Math.random() * thomas_list.length);
            image_handler.set_src(thomas_list[finalIndex]);

            image_handler.apply_style('animation', "cs2-reveal 1.2s forwards")

            audio_handler.play_sound(thomas_list[finalIndex], 0.8)
        }
    }, intervalTime);
}

