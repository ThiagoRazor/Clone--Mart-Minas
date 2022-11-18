function menuShow() {
    const menuMobile = document.querySelector('.botao-menu--mb');
    const menuAside = document.querySelector('.menu-aside');
    const logoMart = document.querySelector('.logo-mart-mb');
    const botaoCadastro = document.querySelector('.area-acesso--mb');
    const botaoMenu = document.querySelector('.botao-menu--mb');
    if (menuAside.classList.contains('closed')) {
        menuAside.classList.remove('closed');
        menuAside.classList.add('open');
        logoMart.style.visibility = "hidden";
        botaoCadastro.style.visibility = "hidden";
        botaoMenu.style.visibility = "hidden";
    }


}

function menuClose() {
    const menuCross = document.querySelector('.menu-close');
    const menuAside = document.querySelector('.menu-aside');
    const logoMart = document.querySelector('.logo-mart-mb');
    const botaoCadastro = document.querySelector('.area-acesso--mb');
    const botaoMenu = document.querySelector('.botao-menu--mb');

    if (menuAside.classList.contains('open')) {
        menuAside.classList.remove('open');
        menuAside.classList.add('closed');
        logoMart.style.visibility = "visible";
        botaoCadastro.style.visibility = "visible";
        botaoMenu.style.visibility = "visible";
    }
}

