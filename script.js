let burger = document.querySelector(".burger")
let xMark = document.querySelector(".x_mark")
let nav = document.querySelector(".header_nav")

burger.addEventListener("click", () => {
    burger.style.display = "none";
    xMark.style.display = "block"
    nav.style.left = "0px"
}
)
xMark.addEventListener("click", () => {
    xMark.style.display = "none";
    burger.style.display = "block";
    nav.style.left = "-100%"
    
}
)
