import analyzer from "./analyzer.js";
import {isRefreshChecked} from "./ui.js";

window.addEventListener("load", () => {
  analyzer.init();
});

if (chrome.devtools) { // Needed to be able to local dev with mocks
  const backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
  });

  backgroundPageConnection.onMessage.addListener((message) => {
    if (message.type === "reload" && message.tabId === chrome.devtools.inspectedWindow.tabId) {
      if (isRefreshChecked()) {
        analyzer.reset();
      }
    }
  });
}
