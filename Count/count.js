let invalue = document.querySelector(".digit").innerHTML
let innerdigit = 0
let decrease = document.querySelector(".dec")
let reset = document.querySelector(".reset")
let increase = document.querySelector(".inc")
decrease.addEventListener("click",()=>{
   
    invalue.innerHTML = --innerdigit;

})
reset.addEventListener("click",()=>{
    innerdigit = 0
})
increase.addEventListener("click",()=>{
    innerdigit++
})



// let innerdigit = document.querySelector(".digit");
// let decrease = document.querySelector(".dec");
// let reset = document.querySelector(".reset");
// let increase = document.querySelector(".inc");


// // Initial value
// let count = 0;
// innerdigit.innerHTML = count;

// decrease.addEventListener("click", () => {
//     count--;
//     innerdigit.innerHTML = count;
// });

// reset.addEventListener("click", () => {
//     count = 0;
//     innerdigit.innerHTML = count;
// });

// increase.addEventListener("click", () => {
//     count++;
//     innerdigit.innerHTML = count;
// });
