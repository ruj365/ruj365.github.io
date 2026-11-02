const quitButton = document.getElementById('quit-button');
const shutdownScreen = document.getElementById('quit-screen');
const redirectText = document.getElementById('redirect-message');

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

// Quit button
quitButton.addEventListener('click', function() {

    // Hide everything else
    document.querySelector('main').style.display = 'none';

    // Show shutdown screen
    shutdownScreen.style.display = 'flex';

    document.body.style.overflow = 'hidden';

    let dots = 1;

    redirectText.textContent =
        'Redirecting to my GitHub profile.';

    const dotAnimation = setInterval(function() {
        dots = (dots % 3) + 1;

        redirectText.textContent =
            'Redirecting to my GitHub profile' + '.'.repeat(dots);

    }, 750); // Update every 750ms

    setTimeout(function() {
        clearInterval(dotAnimation);
        window.location.href = 'https://github.com/ruj365';
    }, 2000); // Redirect after 2 seconds
}); // og every 500ms for 3000ms

// Show front page when user back clicks from github profile
window.addEventListener('pageshow', function() {

    // Show the normal front page
    document.querySelector('main').style.display = '';

    // Hide the shutdown screen
    shutdownScreen.style.display = 'none';

    // Restore scrolling
    document.body.style.overflow = '';

});