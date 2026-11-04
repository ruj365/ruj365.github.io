const terminalInput = document.getElementById('terminal-command');
const terminalOutput = document.getElementById('terminal-output');

terminalInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        const command = terminalInput.value.trim().toLowerCase();

        terminalOutput.textContent +=
            '\nuser-421@ruj365.github.io:~$ ' + command;

        switch (command) {

            case 'help':
                terminalOutput.textContent +=
                    '\nAvailable commands: help, about, cv, clear, quit';
                break;

            case 'about':
                terminalOutput.textContent +=
                    '\nWelcome to my website.';
                break;
            
            case 'quit':
                runQuitSequence();
                break;

            case 'clear':
                terminalOutput.textContent = '';
                break;

            default:
                terminalOutput.textContent +=
                    '\nCommand not found: ' + command;
        }

        terminalInput.value = '';
    }

});