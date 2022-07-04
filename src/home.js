function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const baseImg = document.createElement("img");
    baseImg.src = "imgs/base.jpg";
    baseImg.alt = "base";

    home.appendChild(createParagraph("Best pizza in your country"));
    home.appendChild(createParagraph("Made with passion since 1928"));
    home.appendChild(baseImg);
    home.appendChild(createParagraph("Order online or visit us!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;