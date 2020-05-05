
chrome.extension.onRequest.addListener(() => {
    const selectedText = window.getSelection().toString();
    copyTextToClipboard(selectedText.replace(/\r?\n/g,"").replace(/\s+/g, " ").trim());
})


function copyTextToClipboard(copyText){
    const copyFrom = document.createElement("textarea");

    copyFrom.textContent = copyText;

    const bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    document.execCommand('copy');

    bodyElm.removeChild(copyFrom);
}