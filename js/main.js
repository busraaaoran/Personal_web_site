const nav = document.querySelector('.navbar.sticky-top.navbar-expand-lg.navbar-dark')
const nav2 = document.querySelector(".text-center.text-white")
console.log(nav)
console.log(nav2)

fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
})
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    nav2.innerHTML = data
})