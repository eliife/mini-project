
          let metinAlani=document.querySelector("textarea");
            let buton=document.querySelector("button");
            let sonuc=document.querySelector("p");

            function HarfSay(){
                var metin=metinAlani.value.trim();
                metin=metin.toLowerCase();
                let harfSayilari={};

                for(let i=0;i<metin.length;i++){
                    let harf=metin[i];
                    if(harfSayilari[harf]){
                        harfSayilari[harf]++;
                    }else{
                        harfSayilari[harf]=1;
                    }
                }
                let enCokGecenHarf="";
                let enYuksekSayi=0;
                for(let harf in harfSayilari){
                    if(harfSayilari[harf]>enYuksekSayi){
                        enYuksekSayi=harfSayilari[harf];
                        enCokGecenHarf=harf;
                    }
                }
                sonuc.textContent= `"${enCokGecenHarf}" harfi metinde en çok geçen harftir. (${enYuksekSayi} kez)`;
            }
