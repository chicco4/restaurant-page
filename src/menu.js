function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("Margherita"));
    menu.appendChild(createMenuItem("Bufala e Crudo"));
    menu.appendChild(createMenuItem("Grana e Speck"));
    menu.appendChild(createMenuItem("Capricciosa"));
    menu.appendChild(createMenuItem("Pomodorini"));
    menu.appendChild(createMenuItem("Diavola"));

    return menu;
}

function createMenuItem(name) {
    const item = document.createElement("div");
    item.classList.add("item");

    const foodName = document.createElement("p");
    foodName.textContent = name;

    const foodImage = document.createElement("img");
    foodImage.src = `imgs/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    item.appendChild(foodImage);
    item.appendChild(foodName);

    return item;
}

function loadMenu() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;