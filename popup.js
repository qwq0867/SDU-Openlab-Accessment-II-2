/*chrome.storage.local.get(["needDark"],function(needDark){
    changeImg(needDark);
});*/
const bg=chrome.extension.getBackgroundPage();
let isDark=bg.needDark;
let myButton=document.getElementById("a1");
let mySpeed=document.getElementById("popspeed");
let submitButton=document.getElementById("s1");
/*var port = chrome.extension.connect({
    name: 'situationStorage'
})*/
myButton.onclick=changeImg;
mySpeed.onkeydown=submitSpd;
mySpeed.onclick=init;
submitButton.onclick=changeSpd;
//myButton.onclick=Darkmode;
var buttonCnt=0;
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
    buttonCnt++;
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
            chrome.tabs.executeScript(tabs[0].id,{
                file:"makePlayerdark.js",
            })
            //file:"makePlayerdark.js",
            /*chrome.tabs.insertCSS(tabs[0].id, 
                {file: 'darkstyle.css',
            });*/
        })
        chrome.tabs.insertCSS(null,{file:"darkstyle.css"});
        if(buttonCnt>=2)
        {
            document.getElementById("white").style.color="white";
            document.getElementById("white").style.backgroundColor="red";
            document.getElementById("white").textContent='请刷新页面！！';
        }
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
                file:"makewhite.js",
            })
            chrome.tabs.executeScript(tabs[0].id,{
                file:"makePlayerwhite.js"
            })
        })
        chrome.tabs.query({active:false,currentWindow:true},function(thetabs){
            thetabs.forEach(element => {
                chrome.tabs.sendMessage(element.id,'refresh');
            });
        })
        document.getElementById("white").style.display="block";
    }
}
function submitSpd()
{
    if(event.keyCode==13)
    {
        mySpeed.style.webkitTextFillColor="aqua";
        document.getElementById("s1").click();
        
    }
}
function init()
{
    mySpeed.value='';
    //xmySpeed.disabled=false;
}
function changeSpd()
{
    var spd;
    spd=mySpeed.value;
    //mySpeed.disabled=true;
    //alert(typeof(spd));
    //alert(spd);
    mySpeed.blur();
}
function Darkmode()
{
    
}
