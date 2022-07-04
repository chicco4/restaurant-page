import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

/* HEADER */

function createHeader() {
    const header = document.createElement("header");

    const restaurantName = document.createElement("div");
    restaurantName.textContent = "Restaurant Page";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

/* MAIN */

function createMain() {
    const main = document.createElement("main");
    return main;
}

/* FOOTER */

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()}`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/chicco4";

    const icon = document.createElement("i");
    icon.textContent = "chicco4"
    githubLink.appendChild(icon);

    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

/* CONTENT */

function initializeContent() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector("button"));
    loadHome();
}

initializeContent();