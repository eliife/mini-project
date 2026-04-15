let form=document.querySelector("form");
let hatamesaji=document.querySelector("span");




form.addEventListener("submit",function(e){// form gönderildiğinde şu işlemi yap diyoruz function için bir değişken tanımladık onu kullanmayı unutma
    e.preventDefault();//değişkeni kullanarak çağrıdığımız şey ile sayfanın yenilenmesini engelliyoruz.

    let ad=document.getElementById("ad").value.trim();// input alanına girilen değeri trim ile boşlukları silerek alıyoruz
    let eposta=document.getElementById("eposta").value.trim();//aynı şeyi e posta için de yapıyoruz.

    if(ad===""){// adın boşgeçilmesine karsin if bloğu kullanıyoruzve hata mesajı yazıyoruz ve her boş girillince çalışsın diye return ekliyoruz
        hatamesaji.textContent="Lütfen ad alanını doldurunuz";
        return;
    }

    let desen= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// e posta girişlerini kontrol etmek için bir desen tanımlıyoruz.
    if(!desen.test(eposta)){// burda girilen e postyaı  desne uyup uymadğını test ile kontol ediyoruz.! değilse anlamı taşır yani eposta desen formatında girilmediyse diyor
        hatamesaji.textContent="Lütfen geçerli bir e-posta giriniz.";//hata mesajı yazıyoruz
        return;// her yanlış formatta giriş yapıldığında çalışsın diye return ekliyoruz.
    }

    hatamesaji.style.color="green";//e posta doğru girilmişse yazı rengini yaşil yapıp
    hatamesaji.textContent="Form başarı ile gönderildi.";// başarı mesajı gönderiyoruz.

});