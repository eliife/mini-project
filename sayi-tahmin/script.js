var tahminiSayi = Math.floor(Math.random() * 100) + 1;

var buton = document.querySelector("button");
var input = document.querySelector("input");
var sonuc = document.querySelector("p");

buton.addEventListener("click", function() { 
    var kullaniciTahmini = Number(input.value);
    
    // Boş giriş kontrolü
    if (input.value === "") {
        sonuc.innerHTML = "Lütfen bir sayı giriniz!";
        return;
    }

    if (tahminiSayi === kullaniciTahmini) {
        sonuc.innerHTML = " Tebrikler!!! KAZANDINIZ";
        sonuc.style.color = "#2ecc71"; // Kazanınca yeşil olsun
    } 
    else if (kullaniciTahmini > tahminiSayi) {
        sonuc.innerHTML = " Daha KÜÇÜK bir sayı deneyin.";
        sonuc.style.color = "#e67e22"; // İpucu rengi turuncu
    } 
    else {
        sonuc.innerHTML = " Daha BÜYÜK bir sayı deneyin.";
        sonuc.style.color = "#e67e22";
    }

    // Her tahminden sonra inputu temizle ve odağı orada tut
    input.value = "";
    input.focus();
});