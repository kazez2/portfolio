function greetings() {
    let h1 = document.getElementById("logo")

    h1.addEventListener("click", function () {
        alert("How may I help you " + name);
        h1.classList.toggle("red")
    })

    let name = prompt("Hi there do you like my page?")
    alert("Good Afternoon " + name);

}
greetings();



function activateNav() {
    const menuButton = document.getElementById("menu-btn");

    const sideNav = document.getElementById("nav-links");

    menuButton.addEventListener("click", function () {
        sideNav.classList.toggle('nav-active')
    })
}

activateNav();