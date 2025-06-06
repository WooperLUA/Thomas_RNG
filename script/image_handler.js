export {apply_style, set_src}

const image_zone = document.querySelector("#pic_zone");

if (!image_zone) {
    console.error("No image element found with id 'pic_zone'");
}

function set_src(file_name)
{
    image_zone.src = "pics/" + file_name + ".jpg";
}

function apply_style(type, style)
{
    image_zone.style[type] = style;
}