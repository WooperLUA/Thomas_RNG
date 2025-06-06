import * as audio_handler from './audio_handler.js'
import * as image_handler from './image_handler.js'

const thomas_list =
    [
        "bicot", "blanco", "gwer",
        "shallom", "macron", "woke",
        "alien", "dimanche"
    ];

const rarity_thomas=
{
    Commun:["blanco", "alien"],
    Rare:["macron", "bicot"],
    Epic:["woke","gwer"],
    Legendaire:["shallom"],
    Mythic:["dimanche"],
};

const rarity_color =
{
    Commun:['#03fc3d'],
    Rare:["#037bfc"],
    Epic:["#a103fc"],
    Legendaire:["#fcb103"],
    Mythic:["#fc0303"],
}

const spin_btn = document.querySelector("#spin_btn");
spin_btn.addEventListener("click", spin_the_wheel);

const rarity_text = document.querySelector("#rarity_text");

function spin_the_wheel()
{
    rarity_text.innerHTML = "";
    image_handler.apply_style('boxShadow', "0 50px 50px rgba(0,0,0,0.2)")

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
            let finalThomas = thomas_list[finalIndex];

            image_handler.set_src(finalThomas);

            let thomas_rarity = null;

            for (const [key, values] of Object.entries(rarity_thomas))
            {
                if (values.includes(finalThomas))
                {
                    thomas_rarity = key;
                    break;
                }
            }

            rarity_text.innerHTML = thomas_rarity;
            const text_color = rarity_color[thomas_rarity][0];
            rarity_text.style.color = text_color;

            image_handler.apply_style('boxShadow', `0 0 20px 8px ${text_color}`)
            image_handler.apply_style('animation', "cs2-reveal 1.2s forwards")

            audio_handler.play_sound(finalThomas, 0.8)
        }
    }, intervalTime);
}

