// Elementleri Seçelim
const filtre = document.getElementById("filtre");
const ekleBtn = document.getElementById("ekle");
const gorevListesi = document.getElementById("gorev");
const gorevInput = document.getElementById("gorevInput");

// 1. Görev Ekleme Fonksiyonu
function gorevEkle() {
    const gorevText = gorevInput.value.trim();
    
    if (gorevText === "") {
        alert("Boş görev ekleyemezsiniz!");
        return;
    }

    // Li oluştur
    const li = document.createElement("li");
    
    // Checkbox oluştur
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Checkbox değişim olayı
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("tamamlandı");
        } else {
            li.classList.remove("tamamlandı");
        }
        filtrele(); // Liste güncellenince filtreyi tekrar kontrol et
    });

    // Görev metni (span)
    const span = document.createElement("span");
    span.textContent = gorevText;

    // Birleştirme
    li.appendChild(checkbox);
    li.appendChild(span);
    gorevListesi.appendChild(li);

    // Temizlik ve Odaklanma
    gorevInput.value = "";
    gorevInput.focus();
    filtrele();
}

// 2. Filtreleme Fonksiyonu
function filtrele() {
    const secilen = filtre.value;
    const gorevler = gorevListesi.querySelectorAll("li");

    gorevler.forEach(function(item) {
        switch (secilen) {
            case "tum":
                item.style.display = "flex";
                break;
            case "tamamlandı":
                item.style.display = item.classList.contains("tamamlandı") ? "flex" : "none";
                break;
            case "tamamlanmadı":
                item.style.display = !item.classList.contains("tamamlandı") ? "flex" : "none";
                break;
        }
    });
}

// 3. Olay İzleyicileri (Event Listeners)
ekleBtn.addEventListener("click", gorevEkle);

filtre.addEventListener("change", filtrele);

// Enter tuşu desteği
gorevInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        gorevEkle();
    }
});