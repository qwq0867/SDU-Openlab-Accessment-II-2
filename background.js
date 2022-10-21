//chrome.storage.local.set({"needDark":false});
//localStorage.setItem(needDark,0);
var needDark=false;
var sendToAuto=false;
var myTime=new Date();
if(myTime.getHours()>=23||myTime.getHours<=6)
{
    needDark=true;
    sendToAuto=true;
}
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
    if(req.info=='content.js')
    if(needDark==true)
    {
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{
                file:"func/makedark.js",
            })
            chrome.tabs.executeScript(tabs[0].id,{
                file:"func/makePlayerdark.js"
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
                    file:"func/makedark.js",
                })
                chrome.tabs.executeScript(tabs[0].id,{
                    file:"func/makePlayerdark.js"
                })  
            })
        }
        else
        {
            
        }
    }
})
