/*chrome.storage.local.get(["needDark"],function(needDark){
    changeImg(needDark);
});*/
const bg=chrome.extension.getBackgroundPage();
let isDark=bg.needDark;
let myButton=document.getElementById("a1");
/*var port = chrome.extension.connect({
    name: 'situationStorage'
})*/
myButton.onclick=changeImg;
//myButton.onclick=Darkmode;
if(isDark==true)
{
    document.getElementById("a1").src="res/switch-on.png";
    document.body.style.backgroundColor="#222222";
    document.getElementById("popspeed").style.backgroundColor="#666666";
    document.getElementById("popspeed").style.borderColor="#444444";
    document.getElementById("text1").style.color="#AAAAAA";
    document.getElementById("text2").style.color="#AAAAAA";
    document.getElementById("text3").style.color="#AAAAAA";
    document.body.style.borderColor="#000000";
}
else
{
    document.getElementById("a1").src="res/switch-off.png";
    document.body.style.backgroundColor="#FFFFFF";
    document.getElementById("popspeed").style.backgroundColor="#FFFFFF";
    document.getElementById("popspeed").style.borderColor="#DDDDDD";
    document.getElementById("text1").style.color="#000000";
    document.getElementById("text2").style.color="#000000";
    document.getElementById("text3").style.color="#000000";
    document.body.style.borderColor="#DDDDDD";
}
function changeImg()
{
    if(isDark==false)
    {
        document.getElementById("a1").src="res/switch-on.png";
        document.body.style.backgroundColor="#222222";
        document.getElementById("popspeed").style.backgroundColor="#666666";
        document.getElementById("popspeed").style.borderColor="#444444";
        document.getElementById("text1").style.color="#AAAAAA";
        document.getElementById("text2").style.color="#AAAAAA";
        document.getElementById("text3").style.color="#AAAAAA";
        document.body.style.borderColor="#000000";
        isDark=true;
        /*port.postMessage({
            toBackground:"Dark"
        });*/
        bg.test(true);
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{
                file:"makedark.js",
            })
        })
    }
    else
    {
        document.getElementById("a1").src="res/switch-off.png";
        document.body.style.backgroundColor="#FFFFFF";
        document.getElementById("popspeed").style.backgroundColor="#FFFFFF";
        document.getElementById("popspeed").style.borderColor="#DDDDDD";
        document.getElementById("text1").style.color="#000000";
        document.getElementById("text2").style.color="#000000";
        document.getElementById("text3").style.color="#000000";
        document.body.style.borderColor="#DDDDDD";
        isDark=false;
        /*uport.postMessage({
            toBackground:"White"
        });*/
        bg.test(false);
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{
                file:"autodark.js",
            })
        })
    }
}
function Darkmode()
{
    
}
