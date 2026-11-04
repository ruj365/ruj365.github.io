function runQuitSequence() {
    const quitScreen = document.getElementById('quit-screen');
    const redirectMessage = document.getElementById('redirect-message');

    // load final ogurin artwork
    fetch('art/braille/oguri_final.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load ASCII artwork');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('quit-art').textContent = data;
        })
        .catch(error => {
            console.error(error);
        });

    document.querySelector('main').style.display = 'none';
    document.getElementById('terminal-panel').style.display = 'none';
    document.getElementById('terminal').style.display = 'none';

    // Show shutdown screen
    quitScreen.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    let dots = 1;

    redirectMessage.textContent =
        'Redirecting to my GitHub profile.';

    const dotAnimation = setInterval(function() {
        dots = (dots % 3) + 1;

        redirectMessage.textContent =
            'Redirecting to my GitHub profile' + '.'.repeat(dots);

    }, 750);

    // Redirect after 2 seconds
    setTimeout(function() {
        clearInterval(dotAnimation);
        window.location.href = 'https://github.com/ruj365';
    }, 2000); // og every 500ms for 3000ms
} 

// quit button click event listener
document.getElementById('quit-button').addEventListener('click', runQuitSequence);

// Show front page when user back clicks from github profile
window.addEventListener('pageshow', function() {

    // Show the normal front page
    document.querySelector('main').style.display = '';
    document.getElementById('terminal-panel').style.display = '';
    document.getElementById('terminal').style.display = '';

    // Hide the quit screen
    document.getElementById('quit-screen').style.display = 'none';
    // Restore scrolling
    document.body.style.overflow = '';

    // Clear terminal after back click from github profile
    document.getElementById('terminal-output').textContent = '';
    document.getElementById('terminal-command').value = '';
});