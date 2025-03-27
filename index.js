function startCarrossel(carrossel){
    const imageElement = document.getElementById(carrossel.id);
    imageElement.src = carrossel.imagens[carrossel.current];
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
        "https://www.gsuplementos.com.br/upload/banner/da795d61d2f3974f4c33b521e2c9cadf.webp",
        "https://www.gsuplementos.com.br/upload/banner/1d735b7e32f50d057207711b3eb22b60.webp",
        "https://www.gsuplementos.com.br/upload/banner/d766998ff18a80d5250e928092f72aab.webp",
        "https://www.gsuplementos.com.br/upload/banner/629d18b9f32e78d53c8a3418f7e197ba.webp",
        "https://www.gsuplementos.com.br/upload/banner/48eae3736951df09b4fc82f3ecf9da4c.webp",
        "https://www.gsuplementos.com.br/upload/banner/883b997bd4b0895e9ecdb725e40af95d.webp",
        "https://www.gsuplementos.com.br/upload/banner/bff7535621bfd14d4ae36b680f9e1481.webp",
        "https://www.gsuplementos.com.br/upload/banner/c2d42531e6380afaeb293582db3697ca.webp",
        "https://www.gsuplementos.com.br/upload/banner/5d4676d4b5462169eec5b0c272774ab2.webp",
    ],
    id: "carrossel1",
    timer: 3,
    current: 0
}


startCarrossel(adCarrossel);
setupButtonGroup(btnGroupSuplementos);
setupButtonGroup(btnGroupModa);