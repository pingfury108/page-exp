import init, { QiChaCha } from "./wasm/pkg";

console.log('Hello from the content script!');

function sendHtml() {
  chrome.runtime.sendMessage(
    {
      action: 'document',
      data: {
        message: 'Hello from content script!', doc: document.documentElement.outerHTML
      }
    })
}



init().then(() => {
  console.log(QiChaCha.info());

  window.addEventListener("load", () => {
    sendHtml();
    document.addEventListener("click", function (event) {
      setTimeout(() => {
        sendHtml();
      }, 1 * 1000);
    })
  })

});
