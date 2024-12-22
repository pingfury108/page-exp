console.log('Hello from the background script!');


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'document') {
    const data = request.data;
    console.log(data);
  }
});
