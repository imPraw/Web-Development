//most used Event Lister

const increaseButton = document.querySelector('.increase'); 
const decreaseButton = document.querySelector('.decrease'); 

// window.addEventListener('DOMContentLoaded', () => { 
//     console.log ("Dom content loaded")
// })


let count = 0;
const outputElement = document.querySelector('h1');
increaseButton.addEventListener('click', ()=>{
    // alert('clicked')
    count++;
    // if (count > 10)
    // {
    //     alert ("error")
    // }
    outputElement.innerHTML = count;
    
})

decreaseButton.addEventListener('click', ()=>{
    count--;
    outputElement.innerHTML = count;
    
})


// button.addEventListener('mouseenter', () => { 
//     alert ("mouseentered")
// })
// button.addEventListener('mouseleave', () => { 
//     alert ("mousedleaved!")
// })

// window.addEventListener('load', () => { 
//     console.log ("Load event Triggered")
// })

