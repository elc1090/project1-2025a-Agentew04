function startCarrossel(carrossel){
    setInterval(() => {
        const imageElement = document.getElementById(carrossel.id);
        if (imageElement) {
            carrossel.current = (carrossel.current + 1) % carrossel.imagens.length;
            imageElement.src = carrossel.imagens[carrossel.current];
        }
    }, carrossel.timer * 1000);
}

function setupButtonGroup(buttonGroup){
    let btn = document.getElementById(buttonGroup.ids[buttonGroup.current]);
    btn.classList.add("active");
    buttonGroup.ids.forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        button.addEventListener("click", () => {
            btn.classList.remove("active");
            btn = button;
            btn.classList.add("active");

            // atualizar links
            buttonGroup.links.forEach((link) => {
                if(!link.id){
                    return;
                }
                const element = document.getElementById(link.id);
                if (element) {
                    if (link.type === "img") {
                        element.src = link.value[buttonId];
                    } else {
                        element.innerText = link.value[buttonId];
                    }
                }
            });
        });
    });
    // da trigger no primeiro update
    let firstButtonId = buttonGroup.ids[buttonGroup.current];
    buttonGroup.links.forEach((link) => {
        if(!link.id){
            return;
        }
        const element = document.getElementById(link.id);
        if (element) {
            if (link.type === "img") {
                element.src = link.value[firstButtonId];
            } else {
                element.innerText = link.value[firstButtonId];
            }
        }
    });
}

const adCarrossel = {
    imagens: [
        "img/ad1.webp",
        "img/ad2.webp",
        "img/ad3.webp",
        "img/ad4.webp",
        "img/ad5.webp",
        "img/ad6.webp",
        "img/ad7.webp",
        "img/ad8.webp",
        "img/ad9.webp",
    ],
    id: "carrossel1",
    timer: 3,
    current: 0
}


startCarrossel(adCarrossel);
setupButtonGroup(btnGroupSuplementos);