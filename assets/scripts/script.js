const burgerMenu = () => {
    const burgerMenuButton = document.querySelector('#burgerMenuButton');
    const menu = document.querySelector('#nav-menu');
    console.log(burgerMenuButton);
    console.log(menu);
    const menuToggle = () => {
        console.log(menu);
        console.log(menu.className)
        menu.classList.toggle("not-view")
        console.log(menu);

    }
    burgerMenuButton.addEventListener('click', () => {
        console.log(123 )
        menuToggle()
    })


}
burgerMenu();