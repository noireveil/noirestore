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

        const productImages = document.querySelectorAll('.card-banner-image');
        productImages.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('slide-up');
            }, index * 200);
        });

        setTimeout(() => {
            landingPage.style.display = 'none';
        }, 1000);
    }

    // Fungsi untuk menampilkan konten utama secara instan
    function showMainContentInstantly() {
        landingPage.style.display = 'none';
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');
    }

    if (localStorage.getItem('hasEntered') === 'true') {
        showMainContentInstantly();
    } else {
        if (enterButton) {
            enterButton.addEventListener('click', () => {
                localStorage.setItem('hasEntered', 'true');
                enterSiteWithAnimation();
            });
        }
    }
});
