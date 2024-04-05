let input = document.querySelector(".input")
let inpval = input.value




function show(){
    console.log(inpval)
    let list = document.querySelector(".listt")
    list.innerHTML = `<p> ${input.value
    } </p>`
    input.value =  ""
}





