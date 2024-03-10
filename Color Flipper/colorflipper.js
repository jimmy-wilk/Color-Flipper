// document.addEventListener("input",()=>{
// var colorName = document.querySelector("#input").value
// var bodybg = document.querySelector(".body")
// bodybg.style.background = colorName}
// )

// document.addEventListener("DOMContentLoaded", function () {
//     var inputElement = document.querySelector("#input");

//     inputElement.addEventListener("input", function () {
//         var colorName = inputElement.value.toLowerCase();
//         var bodybg = document.querySelector(".body");
//         bodybg.style.background = colorName;
//     });
// });


    // document.querySelector("#input").addEventListener("input", () => {
    //   document.querySelector(".body").style.background = document.querySelector("#input").value.toLowerCase();
    // });


    document.querySelector(".input").addEventListener("click", () =>{
    document.querySelector(".body").style.background = document.querySelector("#input").value.toLowerCase()
    document.querySelector("#input").value=""});

    
    // document.querySelector(".input").addEventListener("click", () => {
    //     document.querySelector(".body").style.background = document.querySelector("#input").value.toLowerCase();
    //     document.querySelector("#input").value = "";
    // });
    



// document.querySelector("#input").addEventListener("input", (e) => document.body.style.background = e.target.value.toLowerCase());

// const { value } = document.querySelector("#input");
// document.querySelector(".body").style.background = value.toLowerCase();

// const textContent = document.querySelector("#input").textContent;
// document.body.style.background = textContent.toLowerCase();



