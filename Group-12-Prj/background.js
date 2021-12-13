chrome.commands.onCommand.addListener(async (command) => {
    switch (command) {
        case 'greet':
            await greetTitle();
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});

const greetTitle = async () => {
    const notify = new Notify();
    const tab = await notify.getActiveTab();

    chrome.tabs.sendMessage(tab.id, {
        tabTitle: tab.title
    });
}