function generateMatrixEffect() {
    const matrix = document.querySelector('.matrix');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let letters = [];
    for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.classList.add('falling');
        letters.push(span);
        matrix.appendChild(span);
    }
    setInterval(() => {
        for (let i = 0; i < letters.length; i++) {
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            letters[i].textContent = randomChar;
        }
    }, 100);
}
generateMatrixEffect();
