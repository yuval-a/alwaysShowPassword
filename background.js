chrome.tabs.onUpdated.addListener(
    (tabId)=> {
        chrome.scripting.executeScript({
            func: ()=> {
                let passes = document.querySelectorAll('[type="password"');
                if (!passes) return;
                passes.forEach(input=> input.setAttribute("type", "text"));
            },
            target: { tabId }
        })
    }
);