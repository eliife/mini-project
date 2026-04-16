var notİcerigi=document.querySelector("textarea");
var kaydet=document.querySelector("button");
var notKutusu=document.querySelector("div");
var tumNotlar=[];


kaydet.addEventListener("click",function(){
    if(notİcerigi.value.trim()===""){
        console.log("geçerli bir not giriniz.")
        return;
    }
    let yazilan=notİcerigi.value;
    localStorage.setItem("notum",yazilan);
    let notum=localStorage.getItem("notum");
    notKutusu.textContent=notum;
});
window.onload=function(){
    let notum=localStorage.getItem("notum");
    notKutusu.textContent=notum;
}