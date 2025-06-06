const image_list =
    [
    "bicot", "blanco", "gwer",
    "shallom", "macron", "woke",
    "alien", "dimanche"
    ];
const image_zone = document.querySelector("#pic_zone");

function spin_the_wheel() {
    if (!image_zone) {
        console.error("No image element found with id 'pic_zone'");
        return;
    }
    image_zone.style.animation = "flotte 0.8s ease-in-out infinite ";

    let spins = 20;
    let intervalTime = 100;
    let currentSpin = 0;

    const spinner = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * image_list.length);
        image_zone.src = "pics/" + image_list[randomIndex] + ".jpg";

        currentSpin++;

        if (currentSpin === spins - 5) intervalTime = 200;
        if (currentSpin === spins - 2) intervalTime = 400;

        if (currentSpin >= spins) {
            clearInterval(spinner);


            const finalIndex = Math.floor(Math.random() * image_list.length);
            image_zone.src = "pics/" + image_list[finalIndex] + ".jpg";

            image_zone.style.animation = "cs2-reveal 1.2s forwards";
        }
    }, intervalTime);
}

