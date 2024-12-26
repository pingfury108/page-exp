console.log('Hello from the background script!');


const isFirefoxLike = process.env.EXTENSION_PUBLIC_BROWSER === 'firefox' || process.env.EXTENSION_PUBLIC_BROWSER === 'gecko-based'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'document') {
    const data = request.data;
    console.log(data);
  }
});



if (isFirefoxLike) {
  browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.open()
  })
} else {
  chrome.action.onClicked.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  })
}
