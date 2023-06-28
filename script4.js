const links = document.querySelectorAll(".tablink");
const tabs = document.querySelectorAll(".tabcontents");
const msg = document.querySelector("#msg");
function opentab1(random) {
    for (lin of links) {
        lin.classList.remove("activelink");
    }
    for (ta of tabs) {
        ta.classList.remove("activetab");
    }

    event.currentTarget.classList.add("activelink");
    document.getElementById(random).classList.add("activetab");
}
const sidemenu = document.querySelector("#sidemenu");
function opentab() {
    sidemenu.style.right = "0";

}
function closetab() {
    sidemenu.style.right = "-200px";

}
// function linkclicked()ctivetag
// {
// links.forEach (links=>{links.classList.remove("activelink")});
// // this.classList.add("activelink")
// }
const scriptURL = 'https://script.google.com/macros/s/AKfycbwEsDi9pZUdZNGBOaIzNouRAnpD0kEjk14aSt3soJBzhSSOghhffjFJnFMKKgaFk_o8/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Masagge sent succesfully"
            setTimeout(function () { msg.innerHTML = "" }, 5000)
form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})