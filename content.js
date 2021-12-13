// Notify body, icon, and text
const notification = document.createElement("div");
notification.className = 'notify-notification';

const icon = document.createElement('img');
icon.src = chrome.runtime.getURL("images/icon32.png");
notification.appendChild(icon);

const notificationText = document.createElement('p');
notification.appendChild(notificationText);

document.body.appendChild(notification);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    const notification = document.getElementsByClassName('notify-notification')[0];
    const notificationText = notification.getElementsByTagName('p')[0];
    
    const notify = new Notify();
    notificationText.innerHTML = notify.getGreetTitle(request.tabTitle);

    notification.style.display = 'flex';

    setTimeout(function () {
        notification.style.display = 'none';
    }, 5000);
    
    return true;
}); 