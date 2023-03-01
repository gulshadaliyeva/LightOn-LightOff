let lightOnBtn = document.querySelector(".lightOnBtn")
let lightOffBtn = document.querySelector(".lightOffBtn")
let lightOnImg = document.querySelector("img.lightOn")
let lightOffImg = document.querySelector("img.lightOff")

lightOnBtn.onclick = function(){
    let activeImg = document.querySelector("img.active");
    activeImg.classList.remove("active")
    lightOnImg.classList.add("active")
}
lightOffBtn.onclick = function(){
    let activeImg = document.querySelector("img.active");
    activeImg.classList.remove("active")
    lightOffImg.classList.add("active")
}