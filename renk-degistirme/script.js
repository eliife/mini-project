const button=document.getElementById("renkDeğiştir");
function arkaPlanDegistir(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const renk = `rgb(${r}, ${g}, ${b})`;   
    document.body.style.backgroundColor=renk;

}
button.addEventListener("click",arkaPlanDegistir);


//${değişken} dinamik bir değişken tanımlamak için kullanılır
