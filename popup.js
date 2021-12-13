document.addEventListener('DOMContentLoaded', async () => {
    
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };
    
    const notify = new Notify();
    const tab = await notify.getActiveTab();
    const greet = notify.getGreetTitle(tab.title);

    dialogBox.innerHTML = greet;
});