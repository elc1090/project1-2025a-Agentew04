const adCarrosel = {
    imagens: [
        "ad1.webp",
        "ad2.webp",
        "ad3.webp",
        "ad4.webp",
        "ad5.webp",
        "ad6.webp",
        "ad7.webp",
        "ad8.webp",
        "ad9.webp",
    ],
    id: "carrosel1",
    timer: 3,
    current: 0
}

setInterval(() => {
    const imageElement = document.getElementById(adCarrosel.id);
    if (imageElement) {
        adCarrosel.current = (adCarrosel.current + 1) % adCarrosel.imagens.length;
        imageElement.src = `img/${adCarrosel.imagens[adCarrosel.current]}`;
    }
}, adCarrosel.timer * 1000);



