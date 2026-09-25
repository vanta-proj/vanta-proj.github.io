const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

}


const versionSelect =
    document.getElementById("versionSelect");

if (versionSelect) {

    versionSelect.addEventListener("change", () => {

        const url = versionSelect.value;

        if (url) {
            window.location.href = url;
        }

    });

}