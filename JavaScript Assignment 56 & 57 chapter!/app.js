let box = document.getElementsByClassName("box")[0];
let btn1 = document.getElementById("btnbox");
let img = document.getElementById("img");
let imgbtn = document.getElementById("btnimg");
let rulebtn =document.getElementById("rulebtn");
let coursebtn = document.getElementById("coursebtn");


btn1.addEventListener("click", () => {
    console.log("click");
    box.classList.add("newBox");
});


img.addEventListener("mouseover", () => {
    imgbtn.textContent ="▶"
    imgbtn.classList.add("newbtn");
});

img.addEventListener("mouseout", () => {
       imgbtn.textContent =""
    imgbtn.classList.remove("newbtn");
}); 


let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let div = document.getElementById("div");
    let notices = div.getElementsByTagName("p");

    for (let i = 0; i < notices.length; i++) {

        notices[i].innerHTML = " ★ " + notices[i].innerHTML;

        notices[i].classList.add("highlight");
    }

});


// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {

//     let div = document.getElementById("div");

//     let notices = div.getElementsByTagName("p");

//     for (let i = 0; i < notices.length; i++) {

//         notices[i].innerHTML = "★ " + notices[i].innerHTML;

//         notices[i].classList.add("highlight");
//     }

// });






rulebtn.addEventListener("click",()=>{
    let student = document.getElementById("studentRules");
   let p = student.getElementsByTagName("p");

    for (let i = 0; i < p.length; i++) {
        p[i].classList.add("highlight");
        
    }
})

coursebtn.addEventListener("click",()=>{
    let  course = document.getElementById("courseInfo");
    let pera = course.getElementsByTagName("p");

    for (let i = 0; i < pera.length; i++) {
        pera[i].classList.add("highlight")
    }
})  