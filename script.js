
// Mengubah mode terang/gelap dari aplikasi
function toggleMode() {
    let body = document.body;
    if (document.getElementById('mode-switch').checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}
