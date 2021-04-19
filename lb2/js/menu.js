let menu = document.getElementById('menu');

const createMenuItem = (link, text) => {
    let item = document.createElement('a');
    item.classList.add('menuItem');
    item.href = link;
    item.innerHTML = text;
    if (window.location.pathname === link) {
        item.classList.add('active');
    }
    return item;
}
menu.appendChild(createMenuItem('/lb2/', 'LB2'));
menu.appendChild(createMenuItem('/lb2/animation/', 'Animationen'));
menu.appendChild(createMenuItem('/lb2/audio/', 'Audio'));
menu.appendChild(createMenuItem('/lb2/video/', 'Video'));
menu.appendChild(createMenuItem('/lb2/bild/', 'Bilder'));
menu.appendChild(createMenuItem('/lb2/jura/', 'Juristisches'));
menu.appendChild(createMenuItem('/lb2/konzept/', 'Konzept'));
menu.appendChild(createMenuItem('/lb2/impressum/', 'Impressum'));