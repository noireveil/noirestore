document.addEventListener('DOMContentLoaded', () => {

    // --- Fungsi Efek Mesin Ketik ---
    function typewriterEffect(elementId, delay = 45) {
        return new Promise((resolve) => {
            const element = document.getElementById(elementId);
            if (!element) {
                resolve();
                return;
            }

            const originalHtml = element.innerHTML;
            element.innerHTML = '';
            element.style.visibility = 'visible';

            const cursor = document.createElement('span');
            cursor.id = 'typing-cursor';
            element.appendChild(cursor);

            let i = 0;
            function type() {
                if (i >= originalHtml.length) {
                    cursor.remove();
                    resolve();
                    return;
                }

                // Langsung tambahkan tag HTML tanpa diketik per karakter
                if (originalHtml[i] === '<') {
                    const tagEndIndex = originalHtml.indexOf('>', i);
                    const tag = originalHtml.substring(i, tagEndIndex + 1);
                    cursor.insertAdjacentHTML('beforebegin', tag);
                    i = tagEndIndex + 1;
                } else {
                    cursor.insertAdjacentHTML('beforebegin', originalHtml[i]);
                    i++;
                }
                
                setTimeout(type, delay);
            }
            type();
        });
    }

    // --- Pengatur Urutan Animasi ---
    async function startAnimationSequence() {
        await typewriterEffect('philosophy-name');
        await typewriterEffect('philosophy-logo');
    }

    // Mulai animasi setelah jeda 1.2 detik
    setTimeout(startAnimationSequence, 1200);

});