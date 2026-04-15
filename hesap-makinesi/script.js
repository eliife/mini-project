var sonuc=document.querySelector("p");

function topla(){
    let sayi1=Number(document.getElementById("sayi1").value);
    let sayi2=Number(document.getElementById("sayi2").value);
    let toplaSonuc=sayi1+sayi2;
    sonuc.textContent="SONUÇ:"+toplaSonuc.toFixed(2);

}
function cikar(){
    let sayi1=Number(document.getElementById("sayi1").value);
    let sayi2=Number(document.getElementById("sayi2").value);
    let cikarSonuc=sayi1-sayi2;
    sonuc.textContent="SONUÇ:"+cikarSonuc.toFixed(2);

}
function carp(){
    let sayi1=Number(document.getElementById("sayi1").value);
    let sayi2=Number(document.getElementById("sayi2").value);
    let carpSonuc=sayi1*sayi2;
    sonuc.textContent="SONUÇ:"+carpSonuc.toFixed(2);

}
function bol(){
    let sayi1=Number(document.getElementById("sayi1").value);
    let sayi2=Number(document.getElementById("sayi2").value);
    if(sayi2==0){
        sonuc.textContent="SONUÇ:Lütfen 0'dan büyük bir sayı giriniz..."
    }else{
        let bolSonuc=sayi1/sayi2;
        sonuc.textContent="SONUÇ:"+bolSonuc.toFixed(2);
    }
    

}
/***
 * toFixed:sonucu 2 ondalık basamağa yuvarlar.Virgülden sonra iki basamak bırakır.
 */

