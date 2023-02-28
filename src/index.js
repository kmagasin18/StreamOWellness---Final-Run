 var typingEffect = new Typed(".fittext",{
    strings : ["Healthy.","Fit.","Active."],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
        })

const form = document.querySelector("form")

form.addEventListener('submit', e =>{
    if (!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add('was-validated')
})
// var menu_btn = document.querySelector("#mtoggler")
// var sidebar = document.querySelector("#sidemenu")
// var container = document.querySelector(".container-fluid")
//     menu_btn.addEventListener("click",()=>{
//     sidebar.classList.toggle("active-nav")
//     container.classList.toggle("active-cont")
//         })
