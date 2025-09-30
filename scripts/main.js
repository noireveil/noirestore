document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const enterButton = document.getElementById('enter-button');

    // Fungsi untuk transisi dari landing page ke konten utama
    function enterSiteWithAnimation() {
        landingPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');

        setTimeout(() => {
            landingPage.style.display = 'none';
        }, 1000);
    }

    // Cukup pasang event listener pada tombol, tanpa logika if/else atau storage
    if (enterButton) {
        enterButton.addEventListener('click', () => {
            enterSiteWithAnimation();
        });
    } else {
        // Fallback jika tombol tidak ditemukan, langsung tampilkan konten
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');
        landingPage.style.display = 'none';
    }
});
