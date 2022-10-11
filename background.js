//chrome.storage.local.set({"needDark":false});
//localStorage.setItem(needDark,0);
var needDark=false;
var sendToAuto=false;
function test(msg)
{
    needDark=msg;
    if(msg==false)
    {
        sendToAuto=false;
    }
    else
    {
        sendToAuto=true;
    }
}
chrome.runtime.onMessage.addListener((req,sender, sendResponse) => {
    sendResponse(sendToAuto);
})

