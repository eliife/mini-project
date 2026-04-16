var input=document.querySelector("input");
var span=document.querySelector("span");


input.addEventListener("input",function(){
    const uzunluk=input.value.length;
    span.textContent=uzunluk;

    if(uzunluk>=20){
        span.style.color="red";
    }else{
        span.style.color="blue";
    }
});