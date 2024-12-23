function generateKey(length = 16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

document.getElementById('generate-button').addEventListener('click', function() {
    const key = generateKey();
    document.getElementById('key-display').textContent = key;
});
