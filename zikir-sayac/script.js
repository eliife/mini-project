const counter=document.getElementById("counter");
let count=0;

document.addEventListener("keydown",function(event){
    const key = event.key;
    const code = event.code;

    if(key==="+" || key==="="||code==="NumpadAdd"){
        count++;
        
    }else if(key===0  || code === "Digit0"|| code === "Numpad0"){
        count=0;
    }
    counter.textContent=count;
});