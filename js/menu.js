function expandMenu() {
    const burgerMenu = document.getElementById("burgerMenu");
    burgerMenu.classList.toggle("burger-expanded");
}

function expandSubMenu(e) {
    e.preventDefault();
    console.log(e.target.childNodes[0]);
    if(e.target.nextElementSibling.style.getPropertyValue('display') === 'block') {
        e.target.nextElementSibling.style.setProperty('display', 'none');
        e.target.childNodes[0].innerText = '∨';
    } else {
        e.target.nextElementSibling.style.setProperty('display', 'block');
        e.target.childNodes[0].innerText = '∧';
    }
}