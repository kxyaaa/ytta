// Atur kata sandi yang benar di sini (gunakan huruf kecil semua biar mudah)
const sandiBenar = "2025";

function checkPassword() {
    // Ambil input dan ubah jadi huruf kecil semua untuk mencegah error besar/kecil huruf
    const input = document.getElementById("password-input").value.toLowerCase();
    const errorMsg = document.getElementById("error-msg");

    if (input === sandiBenar) {
        errorMsg.style.display = "none";
        nextSlide(2);
    } else {
        errorMsg.style.display = "block";
    }
}

function nextSlide(slideNumber) {
    // Sembunyikan semua slide
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    // Tampilkan slide yang dituju
    document.getElementById(`slide-${slideNumber}`).classList.add('active');

    // Jika masuk ke slide 3 (ucapan), putar musiknya
    if (slideNumber === 3) {
        const bgMusic = document.getElementById("bg-music");
        bgMusic.play().catch(error => console.log("Autoplay dicegah oleh browser"));
    }
}

// Logika Mini Game (Tombol Menghindar)
const btn = document.getElementById("catch-btn");

let moveCount = 0;
const maxMoves = 4;

btn.addEventListener("click", function(e) {

    if (moveCount < maxMoves) {
        e.preventDefault();

        const container = document.querySelector(".game-container");

        const maxX = container.clientWidth - btn.offsetWidth;
        const maxY = container.clientHeight - btn.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        btn.style.left = x + "px";
        btn.style.top = y + "px";

        moveCount++;

        if (moveCount === maxMoves) {
            btn.innerHTML = "Oke deh, kamu menang! 😩";
        }

    } else {
        nextSlide(3);
    }

});
