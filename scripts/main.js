document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const enterButton = document.getElementById('enter-button');

    function enterSiteWithAnimation() {
        landingPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');

        setTimeout(() => {
            landingPage.style.display = 'none';
        }, 1000);
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
