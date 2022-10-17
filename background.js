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
    if(needDark==true)
    {
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{
                file:"makedark.js",
            })
            chrome.tabs.executeScript(tabs[0].id,{
                file:"makePlayerdark.js"
            })
            /*chrome.tabs.insertCSS(tabs[0].id, {
                file: 'darkstyle.css'
            });*/
        })
    }
    else
    {
        
    }
})
chrome.tabs.onActivated.addListener(function(activetab)
{
    if(activetab.tabId)
    {
        if(needDark==true)
        {
            chrome.tabs.query({active:true,currentWindow:true},function(tabs){
                chrome.tabs.executeScript(tabs[0].id,{
                    file:"makedark.js",
                })
                chrome.tabs.executeScript(tabs[0].id,{
                    file:"makePlayerdark.js"
                })  
            })
        }
        else
        {
            
        }
    }
})
