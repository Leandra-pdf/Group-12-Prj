class Notify {
    
    getActiveTab = async () => {
        const query = { active: true, currentWindow: true };
        const getTabTitlePromise = new Promise((resolve, reject) => {
            chrome.tabs.query(query, (tabs) => {
                resolve(tabs[0]);
            });
        });
        return getTabTitlePromise;
    } 
 
    getGreetTitle = (tabTitle) => {
        const greetTitle = `${this.getRandomGreet()} We are on: <br><b>${tabTitle}</b><br>`
        return greetTitle;
    }
    
    
    getGreeting = () => {
        return [
            'Oh hi, I hope my head is here!',
            'Hello... I assume I am in one piece.',
            'Please tell me my bottom is on. ',
            'Hey, I am not just a head, right?',
            'Lost, huh?',
            ':) Smile more :)'
        ];
    }
    
    getRandomGreet = () => {
        const greeting = this.getGreeting();
        const greet = greeting[Math.floor(Math.random() * greeting.length)];
        return greet;
    }
}
