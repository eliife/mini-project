let input=document.querySelector("input");//görev metninin yazdıldığı kutu
let eklebutton=document.getElementById("görevekle");//görev ekle butonu
let liste=document.querySelector("ul");//görevlerin listeleneceği boş liste
let kategoriSec=document.getElementById("kategoriSec");//kategori seçebildiğimiz açılır kapanır liste
let sonTarihInput = document.getElementById("sonTarihInput");//görevin son tarihi girebildiğimiz tarih inputu


    function yeniGorevEkle(gorevobjesi){//yeni görev eklememize yardımcı olan fonksiyon.Parametre olarak görevıbjesi alır.
        
         if(!gorevobjesi.kategori){
            gorevobjesi.kategori = "";//eğer görev kategorisi yoksa boş string yapar.
         }
        
        let yenieleman=document.createElement("li");//yeni bir liste elemanı oluşturur.
        yenieleman.id='yenieleman'
       
        let gorevMetni = gorevobjesi.metin;//görevmetni adında bir değişken oluşturup için görevobjesi değerini atar.
        yenieleman.setAttribute('data-kategori', gorevobjesi.kategori);//li'ye kategori bilgisini data-kategori biçiminde atar.
        
       

        let checkbox=document.createElement("input");//yeni bir checkbox oluşturup türünü checkbox olarak atar ve className check-box olarak tanımlar.
        checkbox.type="checkbox";
        checkbox.className="check-box";
        checkbox.id='checkBox';
        checkbox.checked=gorevobjesi.tamamlandi;//eğer işaretli ise görev bitmiş anlamına gelir.

        if(gorevobjesi.tamamlandi){//burda görev önceden tamamlandıysa eğer(localStorge'den gelen görevlerde geçerli)
            yenieleman.classList.add("tamamlandi");//liste elemanına tamamlandı sınıfı ekleniyor.
        }
        checkbox.addEventListener("change",function(){//checkBox her değiştiğinde çalışacak olayları kapsar
            const yenidurum=checkbox.checked;//yenidurum adında bir değiken tanımlanır ve içine true veya false değerleri kaydedilir.

            if(yenidurum){
                yenieleman.classList.add("tamamlandi");//eğer görev işaretli ise yenielemana(li) tamamlandi classı ekleniyor.
            }else{
                yenieleman.classList.remove("tamamlandi")//eğer görev işaretli değil ise tamamlandi classı kaldırlıyor.
            }
            gorevDurumuGuncelle(gorevMetni,yenidurum);//localStorage'da ki liste alınır.gorevMetni ile görev bulunur.Görevin tamamlandi değeri yenidurum ile değiştirilir.LocalStorage'a yeni hali kaydedilir.
        })

    
        let silbutton=document.createElement("button");
        silbutton.textContent="🗑️";
        silbutton.style.color="black";
        silbutton.id='silbutton';
        silbutton.style.backgroundColor="rgba(0,0,0,0.03)";
        silbutton.className="sil-btn";//sil butonu oluşturduk

        
        let gorevSpan=document.createElement("span");
        gorevSpan.className = "gorev-metni";
        gorevSpan.textContent=gorevMetni;//span oluşturup içine gorevMetni ekliyoruz.
        

        silbutton.addEventListener("click",function(){//sil butonuna tıklandığında 
            gorevSil(gorevMetni)//gorevSil fonkisyonu çalışır.localStoregdan siler.
            yenieleman.remove();//görevi ekrandan siler.
        });
        let duzenlebutton=document.createElement("button");
        duzenlebutton.textContent="📝";
        duzenlebutton.className="duzenle-btn";
        duzenlebutton.id='duzenlebutton';
        duzenlebutton.style.backgroundColor="rgba(0,0,0,0.03)";
        duzenlebutton.style.color="black";//her görev için ayrı ayrı düzenle butonu oluşturuyoruz

        duzenlebutton.addEventListener("click",function(){//düzenle butonuna tıklandığında
            let duzenlemeInput = yenieleman.querySelector('input[type="text"]');//düzenleme yapabilmek için bir input oluşturuyoruz ****hali hazırda bir input var ve onu düzenlemk için kullanılır.
            let yeniMetin;//yeniMetin adında yeni bir değişken tanımladık.

            if(!duzenlemeInput){//eğer düzenleme kutusu yoksa
                let inputAlan=document.createElement("input");//yeni bir input kutusu oluşturuyor.
                inputAlan.type="text";
                inputAlan.value=gorevMetni;//inputAlan değerine gorevMetni(mevcut metin) atanır.
            
            yenieleman.insertBefore(inputAlan,gorevSpan);//input eski metnin bulunduğu yere yerleştirilir.
            yenieleman.removeChild(gorevSpan);//eski metni tutan span silinir.
            duzenlebutton.textContent="kaydet";//düzenle butonunu texti kaydet olarak değişir.
            inputAlan.focus();//inputa focus(yanıp sönen imleç) verilir.

            inputAlan.addEventListener("keypress",function(e){//
                if(e.key==="Enter"){
                    duzenlebutton.click();
                }//kullanıcı enter tuşuna bastığında otomatik kaydet yapılır.
            });
            }else{
                yeniMetin=duzenlemeInput.value.trim();//düzenlemeInputunda ki görevin boşlukları temizlenir.
                if(yeniMetin==="") return;//input boşsa işlem yapmaz.
            }
          
            gorevGuncelle(gorevMetni,yeniMetin);//eski metni yeni metin ile değiştirip localStorage'a kaydeder.

            gorevSpan.textContent=yeniMetin;//gorev kısmına yenimetin(düzenlenmiş metin) yazılır.
            yenieleman.insertBefore(gorevSpan,duzenlebutton);//gorevSpan'ı düzenlebuttonun yerine yerleştirilir.
            if (duzenlemeInput) { //input varsa
                yenieleman.removeChild(duzenlemeInput); //inputu kaldırır.
            } else {
       
                console.error("Hata: Kaldırılacak DOM elemanı bulunamadı.");//yoksa console hata mesajı yazdırır.
            }
            
            duzenlebutton.textContent="DÜZENLE";//duzenle butonuna düzenle yazar.
            gorevMetni=yeniMetin;//görevMetnine  yeniMetin  atanır.Yani görev artık düzenlenmiş olan görev olur.
            
        });
        
        let kategoriLabel = document.createElement("span");//kategeori için span oluşturur.
        kategoriLabel.className = "gorev-kategori";
        kategoriLabel.textContent = `[${gorevobjesi.kategori}] `;

        let tarihLabel = document.createElement("span");//son tarih için tarih metni oluşturur.
        tarihLabel.className = "gorev-son-tarih";
        
        if(gorevobjesi.sonTarih){
            tarihLabel.textContent = ` (Son Tarih: ${gorevobjesi.sonTarih})`;//tarih kısmında seçilen tarihi gösterir.

            const bugun = new Date().toISOString().split('T')[0];//bugünün tarihi alınır.

            if (gorevobjesi.sonTarih < bugun && !gorevobjesi.tamamlandi) {//son tarih geçmiş ve görev tamamlandi işaretli değilse 
                tarihLabel.style.color = "red";//tarih kısmını kırmzı gösterir.
            }
        }

        yenieleman.appendChild(kategoriLabel);//oluşturduğumuz herşeyi yenielemana ekledik.
        yenieleman.appendChild(checkbox);
        yenieleman.appendChild(gorevSpan);
        yenieleman.appendChild(tarihLabel);
        yenieleman.appendChild(kategoriLabel);
        yenieleman.appendChild(duzenlebutton);
        yenieleman.appendChild(silbutton);
        liste.appendChild(yenieleman);//yenielemanı da listeye ekledik.
        
    }

    function gorevGuncelle(eskiMetin, yeniMetin) {//gorev güncellenirken kullanılan fonksiyon.eskiMetin ve yeniMetin şeklinde iki parametre alır.
        let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];//localStorgdeki görev listesini getirir.

    
        let gorev = gorevler.find(g => g.metin === eskiMetin);//güncellenecek olan metni bulur.

        if (gorev) {//görevi bulursa
            gorev.metin = yeniMetin;//eski metnİ yeni metnin ile değiştirir.
        }
    
        localStorage.setItem("gorevler", JSON.stringify(gorevler));//yeni metni localStorge da kaydeder.
    }

    function gorevleriKaydet(yenigorev,gorevKategori,gorevSonTarih){//görevler kaydedilirken kullanılan fonksiyon. yenigorev,kategorisi ve son tarihi parametrelerini alır.
        let gorevler=JSON.parse(localStorage.getItem("gorevler")) || [];//localStorage'daki görev listesini getirir.
        
       const yeniGorevNesnesi = {//yeni bir görev nesnesi tanımlar
        metin: yenigorev,
        tamamlandi: false,
        kategori:gorevKategori,
        sonTarih: gorevSonTarih || ""
    };

        gorevler.push(yeniGorevNesnesi);//yeni görev objesini gorevler listesine kaydeder.

        localStorage.setItem("gorevler",JSON.stringify(gorevler));//localStorge' kaydeder.

    }

    function gorevSil(silinecekGorevMetni){//görev silinirken kullanılan fonskiyon
       let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];//localStorge'de ki görevler getirilir.

        gorevler = gorevler.filter(g => g.metin !== silinecekGorevMetni);//silinmeyecek veriler filter ile belirlenip kaydedilir.Yani silinmeyecek veriler ayıklanır bu şekilde diğer veriler silinmiş olur.

        localStorage.setItem("gorevler", JSON.stringify(gorevler));//yeni görevler listesi localStorge kaydedilir.
    }

    function gorevleriYukle(){//kaydedilmiş görevleri yüklemek için kullanılan fonkiyon
        let gorevler=JSON.parse(localStorage.getItem("gorevler")) || []; //localStoragda ki görevleri getirir.
        liste.innerHTML="";//listeyi temizler.

        gorevler.forEach(gorevobjesi=>{//her görev için ayrı ayrı yeniGorevEkle fonksiyonu çağrılır.(yani ekrana yerleştirir.)
            yeniGorevEkle(gorevobjesi);
        });
    }

    function gorevDurumuGuncelle(gorevMetni,yeniDurum){//görev durumu güncellemek için kullanılan fonksiyon
        let gorevler = JSON.parse(localStorage.getItem("gorevler"));//localStorage'dan görevleri getirir.
        let gorev = gorevler.find(g => g.metin === gorevMetni);//find methodu ile metni eşleşen görevi bulur.
        if (gorev) {//görev varsa
            gorev.tamamlandi = yeniDurum;//tamamlandı değerini günceller
        }
        localStorage.setItem("gorevler", JSON.stringify(gorevler));//güncellenmiş görev listesini localStorage kaydeder.
    }

    eklebutton.addEventListener("click",function(){//ekle buttonuna tıklayınca çalışan fonksiyon
    let gorevMetni=input.value.trim();//gorevMetni adında bir değişken oluşturdu için inputtaki değerin boşlukları temizlenip atandı.

    if(gorevMetni==="") return;//görev metni boş ise calışmaz.

    let seciliKategori=kategoriSec.value==="Tümü" ?"kişisel":kategoriSec.value;//seciliKategori adında bir değişken tanımlandı ve seçilen kategori atandı.

    let secilenSonTarih = sonTarihInput.value;//secilenSonTarih adında bir değişken tanımlandı

    let yeniGorevNesnesi={//yeni bir görev nesnesi tanımlanır.
        metin:gorevMetni,
        tamamlandi:false,
        kategori:seciliKategori,
        sonTarih: secilenSonTarih
    };

    yeniGorevEkle(yeniGorevNesnesi);//yeniGorevNesnesi yeniGorevEkle fonksiyonuna eklenir(Yani ekranda gösterilir.)

    gorevleriKaydet(gorevMetni,seciliKategori,secilenSonTarih);//görevleri gorevleriKaydet fonksiyonu ile localStorage'a kaydedilir.

    input.value="";//input kısmı temizlenir
    sonTarihInput.value = "";//tarih alanı temizlenir

});
kategoriSec.addEventListener("change",function(){//kategori değiştiğinde çalışan fonskiyon
    let seciliKategori=kategoriSec.value;//seçilen kategorinin değerini seciliKategori değişkenine atar.
    let tumGorevler = liste.querySelectorAll("li");
    tumGorevler.forEach(gorevEleman=>{//tüm görevler için ayrı ayrı kategori bilgisi okunur.
        let gorevKategorisi=gorevEleman.getAttribute("data-kategori");

        if (seciliKategori === "Tümü" || gorevKategorisi === seciliKategori) {//aynı kategori değilse saklanır.
            gorevEleman.style.display="";
        }else{
            gorevEleman.style.display="none";
        }


    })
})

gorevleriYukle();//localStorge'da ki görevler ekrana yazdırılır.



    



