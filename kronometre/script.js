let saniye=0;
let dakika=0;
let saat =0;
let intervalId;

function zamanArtir(){
    saniye++;
    if(saniye===60){
        saniye=0;
        dakika++;
    }
    if(dakika===60){
        dakika=0;
        saat++;
    }
let sn=String(saniye).padStart(2,"0");
let d=String(dakika).padStart(2,"0");
let s=String(saat).padStart(2,"0");
document.querySelector("span").textContent=`${s}:${d}:${sn}`;
}

function baslat(){
    clearInterval(intervalId);
    intervalId=setInterval(zamanArtir,1000);
}

function durdur(){
    clearInterval(intervalId);
}
function sifirla(){
    clearInterval(intervalId);
    saniye=0;
    dakika=0;
    saat=0;
    document.querySelector("span").textContent="00.00.00";
    
}