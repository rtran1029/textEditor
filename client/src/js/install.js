const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
        //store the event as "deferredPrompt"
    window.deferredPrompt = event;
        //remove the "hide" class from button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
        //set "promptEvent to equal the "deferredPrompt
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
        //show prompt
    promptEvent.prompt();
        //reset "deferredPrompt" to null
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
        //reset "deferredPrompt" to null
    window.deferredPrompt = null;
});
