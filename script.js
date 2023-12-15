const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});

// for (var i = 0; i < 2; i++) {
//     document.querySelectorAll(".menu-icon")[i].addEventListener("click", function () {
//         document.querySelector("nav").classList.toggle("open");
//     })
// }
