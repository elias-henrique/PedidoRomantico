function sim() {
    const overlay = document.createElement('div');
    overlay.id = 'video-overlay';
    overlay.innerHTML = `
        <div id="video-container">
            <video width="100%" height="100%" controls autoplay>
                <source src="videos/food.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <button id="close-btn">X</button>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('close-btn').onclick = function() {
        document.body.removeChild(overlay);
    };
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
