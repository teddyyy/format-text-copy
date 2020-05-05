chrome.contextMenus.create({
    title : 'Format text and Copy',
    type  : 'normal',
    contexts : ['selection'],
    onclick(info, tab) {
      chrome.tabs.sendRequest(tab.id, {})
    }
})