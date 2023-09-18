var mainEl = document.querySelector(".main")
var beforeEl = document.querySelector(".before")
var afterEl = document.querySelector(".after")
var demo1El = document.querySelector(".demo1")
var demo2El = document.querySelector(".demo2")
var demo3El = document.querySelector(".demo3")
var demo4El = document.querySelector(".demo4")
var demo5El = document.querySelector(".demo5")
var buttonEl = document.querySelector(".button")
var footEl = document.querySelector(".foot")
var demoAllEl = document.querySelector(".demoAll")
var demoEls = [demo1El, demo2El, demo3El, demo4El, demo5El]
var length = demoEls.length
for (i = 0; i < length; i++) {
    demoEls[i].style.left = `${i * 1254}px`
}
for (i = 0; i < length; i++) {
    var spanEl = document.createElement("span")
    footEl.append(spanEl)

}
var spanEls = Array.from(footEl.querySelectorAll("span"))
var count = 0
active(count)
isBtn()
buttonEl.addEventListener("click", function (event) {
    if (event.target === beforeEl) {
        count--
        demoAllEl.style.transform = `translateX(${-20 * count}%)`
        isBtn()
        active(count)
    }
    else if (event.target === afterEl) {

        count++
        demoAllEl.style.transform = `translateX(${-20 * count}%)`
        isBtn()
        active(count)
    }
})
// setInterval(function () {
//     count++
//     if(count===length){count=0}
//     demoAllEl.style.transform = `translateX(${-20 * count}%)`
//     isBtn()
//     active(count)
// }, 2000);
document.addEventListener("contextmenu", function (event) {
    event.preventDefault()
})
function isBtn() {
    if (count === 0) {
        beforeEl.style.display = "none"
    }
    else if (count === length - 1) {
        afterEl.style.display = "none"
    }
    else {
        beforeEl.style.display = "block"
        afterEl.style.display = "block"
    }
}

function active(number) {
    var foEl = footEl.querySelector(".active")
    if (foEl) {
        foEl.classList.remove("active")
    }
    spanEls[number].classList.add("active")
}