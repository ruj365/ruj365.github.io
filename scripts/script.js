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

// user visits the site again
const welcomeMessage = document.getElementById('welcome');
function updateWelcomeMessage() {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited === 'true') {
        welcomeMessage.textContent = "Welcome back, user-421.";
    } else {
        welcomeMessage.textContent = "Welcome to my website, user-421.";
        localStorage.setItem('hasVisited', 'true');
    }
}

// user intially visits the site
updateWelcomeMessage();

// works with back click from github profile
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        welcomeMessage.textContent = "Welcome back, user-421.";
    }
});