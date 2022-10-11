
function make(isDark)
{
    /*alert("进入函数！");
    alert(typeof(isDark));
    alert(isDark)*/
    if(isDark==true)
    {   document.getElementById('i_cecream').style.backgroundColor='black';
        document.getElementsByName('Wh0')='#000000';
    }
    else
    {
        document.getElementById('i_cecream').style.backgroundColor='white';
        document.getElementsByName('Wh0')='#FFFFFF';
    }
}

chrome.runtime.sendMessage({
    info: "content.js"
}, res => {
    // 答复
    make(res);
})

