document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const enterButton = document.getElementById('enter-button');

    // Fungsi untuk menampilkan konten utama DENGAN animasi
    function enterSiteWithAnimation() {
        landingPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');

        // setTimeout untuk memastikan transisi berjalan lancar
        setTimeout(() => {
            landingPage.style.display = 'none';
        }, 1000); // Durasi ini harus cocok dengan transisi di CSS
    }

    if (enterButton) {
        enterButton.addEventListener('click', () => {
            enterSiteWithAnimation();
        });
    } else {
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');
        landingPage.style.display = 'none';
    }
});
