fetch('art/braille/joyboy.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not load ASCII artwork');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('ascii-art').textContent = data;
    })
    .catch(error => {
        console.error(error);
    });