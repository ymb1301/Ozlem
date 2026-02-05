const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const notification = document.getElementById("notification");

// Hayır mesajları dizisi
const hayirMesajlari = [
  "Seni çok seviyorum",
  "Tekrar denemelisinn",
  "Ben daha çok seviyorum diyiceksin biliyorum hayır ama yanlış",
  "Sana tahmin edemediğin kadar büyük bir sevgiyle bağlıyım",
  "Seni kırdığım için çok özür dilerim",
  "Hala hayırmı diyorusun sevgimizden güç al yapabiliriz",
  "Artık ciddileşiyorum evlenirim senle görürsün",
  "Yaşıdığını hissetiren beni unuttun mu",
  "E hatırla artık o seni çok etkileyen gülüşümü",

];

let hayirSayac = 0;
let notificationTimeout; // timeout referansı

// Bildirim gösterme fonksiyonu
function showNotification(mesaj, duration = 3500) {
  notification.textContent = mesaj;
  notification.classList.add("show");

  if (notificationTimeout) clearTimeout(notificationTimeout);

  notificationTimeout = setTimeout(() => {
    notification.classList.remove("show");
  }, duration);
}

// Evet butonuna tıklandığında bildirim göster
yesBtn.addEventListener("click", () => {
  showNotification("14.02.2026 te sana çok beğeniceğin çok ama çok böyle bir hediye vereceğim iyice meraklan 😆", 5000);

  // 5 saniye sonra YouTube videosunu aç
  setTimeout(() => {
    window.open("https://youtube.com/shorts/p_uEvaYqyWY?si=u_Go4Q2wsz-fr6Kl", "_self");
  }, 5000); // 5000 ms = 5 saniye
});

// Hayır butonuna tıklandığında bildirim ve boyut değişimi
noBtn.addEventListener("click", () => {
  // Eğer mesaj dizisinde mesaj varsa göster, yoksa fotoğrafları göster
  if (hayirSayac < hayirMesajlari.length) {
    const mesaj = hayirMesajlari[hayirSayac];
    // Son mesaj için daha kısa süre
    const duration = (hayirSayac === hayirMesajlari.length - 1) ? 500 : 3000;
    showNotification(mesaj, duration);
  } else {
    // Son tıklamada fotoğrafları göster
    showPhotos();
  }

  hayirSayac++;

  // Hayır butonunu her basmada küçült
  const currentWidth = noBtn.offsetWidth;
  const currentHeight = noBtn.offsetHeight;
  noBtn.style.width = currentWidth * 0.9 + "px";  // %10 küçült
  noBtn.style.height = currentHeight * 0.9 + "px";

  // Evet butonunu her basmada büyüt
  const evetWidth = yesBtn.offsetWidth;
  const evetHeight = yesBtn.offsetHeight;
  yesBtn.style.width = evetWidth * 1.10 + "px";  // %26 büyüt
  yesBtn.style.height = evetHeight * 1.10 + "px";

  // 10 kere basınca Hayır butonunu gizle
  if (hayirSayac >= 10) {
    noBtn.style.display = "none";
  }
});

// Fotoğrafları gösterme fonksiyonu
function showPhotos() {
  const photoContainer = document.getElementById("photo-container");

  // Eğer daha önce fotoğraflar eklendiyse tekrar ekleme
  if (photoContainer.children.length > 0) return;

  // İki fotoğraf oluştur
  const photo1 = document.createElement("img");
  photo1.src = "1.jpeg"; // Kullanıcı bu dosyaları ekleyecek
  photo1.alt = "Fotoğraf 1";
  photo1.className = "photo-item";

  const photo2 = document.createElement("img");
  photo2.src = "2.jpeg"; // Kullanıcı bu dosyaları ekleyecek
  photo2.alt = "Fotoğraf 2";
  photo2.className = "photo-item";

  photoContainer.appendChild(photo1);
  photoContainer.appendChild(photo2);

  // Container'ı göster
  photoContainer.classList.add("show");
}




