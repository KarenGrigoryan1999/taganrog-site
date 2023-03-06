window.addEventListener("scroll", (_) => {
    let scroll = this.scrollY;
    const header$ = document.querySelector('.header');
    if(scroll > 70) {
        header$.classList.add('header-scroll');
    } else {
        header$.classList.remove('header-scroll');
    }
});

const loadingPage = () => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.style.opacity = 0;
    }, 0); //3000

    setTimeout(() => {
        loader.style.display = 'none';
    }, 0); //3700
}

loadingPage();