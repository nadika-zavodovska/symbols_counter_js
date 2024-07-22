// const input = document.querySelector('.input');
// const output = document.querySelector('.output');
// const PASSLENGTH = 13;

// input.addEventListener('input', function(){
//     output.textContent = 0 + this.value.length

//     if(this.value.length >= PASSLENGTH){
//         output.style.color = 'green'
//     } else{
//         output.style.color = "red"
//     }
// });


const input = document.querySelector('.input');
const output = document.querySelector('.output');
const MAXLENGTH = 15;

input.addEventListener('input', function(){
    output.textContent = MAXLENGTH - this.value.length

    if(this.value.length == MAXLENGTH){
        output.style.color = 'red'
    }
   });