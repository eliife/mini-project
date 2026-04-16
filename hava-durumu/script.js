let sehirİnput=document.getElementById("sehir");
let buton=document.querySelector("button");
let sonuc=document.getElementById("sonuc");

let apiKey="cf1b95c700934b4dd542dc2c5b5306e7";

buton.addEventListener("click",function(){
    let sehir=sehirİnput.value.trim();

    if(sehir===""){
        sonuc.textContent="Lütfen bir şehir girin";
        sonuc.style.color="red";
        return;
    
    }
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`;

    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
        if(data.cod==="404"){
            sonuc.textContent="ŞEHİR BULUNMADI";
            sonuc.style.color="red";
            return;
        
        }
        let derece=data.main.temp;
        let aciklama=data.weather[0].description;
        let sehirAdi=data.name;
        sonuc.innerHTML = `<strong>${sehirAdi}</strong> için sıcaklık: <strong>${derece}°C</strong><br>Açıklama: <em>${aciklama}</em>`;
    })
    .catch(error=>{
        sonuc.textContent="Bir hata oluştu.Lütfen tekrar deneyin";
    });  

});