

let tarih=document.querySelector("input");
let sayacBtn=document.getElementById("sayac");
let sonuc=document.getElementById("süre");
let intervalİD;

function sureGuncelle(){
    const seciliTarih=new Date(tarih.value);
    const simdi=new Date();
    const fark=seciliTarih-simdi;
     if(fark<=0){
    clearInterval(intervalİD);
    sonuc.textContent="SÜRE DOLDU!";
    return;
   }

   const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
   const saat = Math.floor((fark / (1000 * 60 * 60)) % 24);
   const dakika = Math.floor((fark / (1000 * 60)) % 60);
   const saniye = Math.floor((fark / 1000) % 60);

   sonuc.textContent = `${gun} Gün / ${saat} Saat / ${dakika} Dakika / ${saniye} Saniye`;

}

sayacBtn.addEventListener("click",function(){

if(!tarih.value){
    alert("Lütfen bir tarih seçin!!!");
    return;
}
  const seciliTarih = new Date(tarih.value);  // burada da tanımla
  const simdi = new Date();
 
  if (seciliTarih <= simdi) {
    alert("Lütfen gelecekte bir tarih seçin!");
    return;
  }

 if (intervalİD) {
    clearInterval(intervalİD);
  }

sureGuncelle();

intervalİD=setInterval(sureGuncelle,1000);
    
});
