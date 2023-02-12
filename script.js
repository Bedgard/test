// // let a = document.querySelector("a");
// // let button = document.querySelector("button");



// // a.onclick = () => 

// // { if (confirm('Etes-vous sûr ?')) {
// // location.href ="http://believemy.com"
// // }
// // }



// // button.onmouseover = () => {
// //     document.body.style.backgroundColor = "orange";
// // }

// // button.onmouseout = () => {
// //     document.body.style.backgroundColor = "white";
// // }


// let a = document.querySelector('a');
// let button = document.querySelector("button");

// a.addEventListener("click",()=> {
//  console.log();
// })

// function backgroundWhite() {
//     document.body.style.backgroundColor = "white"
// }

// function backgroundOrange() {
//     document.body.style.background = "orange";
// }
// ;
// button.addEventListener("mouseover", backgroundOrange);
// button.addEventListener("mouseout", backgroundWhite);
// button.addEventListener("mouseout", ()=> {
//     document.body.style.fontFamily = "arial";
// })

// button.removeEventListener("mouseout", backgroundWhite);

let timer = setTimeout("alert('bonjour')", 5000); 
clearTimeout(timer);

function paul ()

{ console.log("merci")}

paul();