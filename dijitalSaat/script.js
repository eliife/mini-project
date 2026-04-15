function saatGuncelle(){
    var tarih=new Date;
    var saat=tarih.getHours();
    var dk=tarih.getMinutes();
    var saniye=tarih.getSeconds();

    if(saat<10){saat="0"+saat};
    if(dk<10){dk="0"+dk};
    if(saniye<10){saniye="0"+saniye};

    var saatMetni=saat+":"+dk+":"+saniye;

    document.getElementById("saat").textContent=saatMetni;
}
setInterval(saatGuncelle, 1000);