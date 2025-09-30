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

    function showMainContentInstantly() {
        landingPage.style.display = 'none';
        mainContent.classList.add('visible');
        document.documentElement.classList.remove('landing-active');
    }

    if (sessionStorage.getItem('hasEntered') === 'true') {
        showMainContentInstantly();
    } else {
        if (enterButton) {
            enterButton.addEventListener('click', () => {
                sessionStorage.setItem('hasEntered', 'true');
                enterSiteWithAnimation();
            });
        }
    }
});
