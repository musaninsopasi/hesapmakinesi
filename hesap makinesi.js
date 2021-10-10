    let secim = document.querySelector("#box").children;
    let sonuc = document.querySelector("#sonuc");
    let clean = document.querySelector("#clean");
    let hesap = document.querySelector("#hesapla");
 
    clean.addEventListener("click", temizle);
    hesap.addEventListener("click", hesapla);
 
    for (var i = 0; i < 16; i++) {
        if (i != 12 && i != 14) { 
            secim[i].addEventListener("click", yazdir);
        }
    }
 
    function hesapla() {
        sonuc.innerText = eval(sonuc.innerText);
        if (eval(sonuc.innerText.length) > 8) { 
            sonuc.innerText = eval(sonuc.innerText).toPrecision(8);
        }
    }
 
    function temizle() {
        sonuc.innerText = " ";
    }
 
    function yazdir() {
        if (sonuc.innerText.length < 8) 
            sonuc.innerText = sonuc.innerText + this.innerText;
    }
 
