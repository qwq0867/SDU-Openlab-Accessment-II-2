
/*function make(isDark)
{
    /*alert("进入函数！");
    alert(typeof(isDark));
    alert(isDark)
    if(isDark==true)
    {   document.getElementById('i_cecream').style.backgroundColor='black';
        document.getElementsByName('Wh0')='#000000';
    }
    else
    {
        document.getElementById('i_cecream').style.backgroundColor='white';
        document.getElementsByName('Wh0')='#FFFFFF';
    }
}*/

/*chrome.runtime.sendMessage({
    info: "content.js"
}, res => {
    // 答复
})*/
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.info=="refresh")
    {
        if(document.hidden==true)
        location.reload();
    }
    if(request.info=='popup.js')
    {
        if(document.getElementById('i_cecream')==null)
        {
            var mySpeed=document.createElement('li');
            mySpeed.className='bpx-player-ctrl-playbackrate-menu-item';
            //mySpeed.dataValue=parseFloat(request.spdChg);
            mySpeed.setAttribute("data-value",request.spdChg);
            mySpeed.textContent=request.spdChg+'x';

            /*var nowSpd=document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu-item bpx-state-active");
            Array.from(nowSpd).forEach(element=>{
                element.setAttribute("data-value",request.spdChg);
                element.textContent=request.spdChg+'x';
            })*/

            
            console.log("create!");
            var speedBar=document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu")
            speedBar[0].appendChild(mySpeed);
        }
    }
})
