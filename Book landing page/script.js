function toggleNav(displayState) {
    const nav = document.getElementById('header_nav');
    const close_icon = document.getElementById('close-icon');
    console.log(displayState);
    nav.style.display = displayState;
    close_icon.style.display = displayState;
};