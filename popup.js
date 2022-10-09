var isDark=false
function changeImg()
{
    if(isDark==false)
    {
        document.getElementById("a1").src="res/switch-on.png";
        document.body.style.backgroundColor="#222222";
        document.getElementById("popspeed").style.backgroundColor="#666666";
        document.getElementById("popspeed").style.borderColor="#444444";
        document.getElementById("text1").style.color="#AAAAAA"
        document.getElementById("text2").style.color="#AAAAAA"
        document.getElementById("text3").style.color="#AAAAAA"
        document.body.style.borderColor="#000000"
        isDark=true;
    }
    else
    {
        document.getElementById("a1").src="res/switch-off.png";
        document.body.style.backgroundColor="#FFFFFF";
        document.getElementById("popspeed").style.backgroundColor="#FFFFFF";
        document.getElementById("popspeed").style.borderColor="#DDDDDD";
        document.getElementById("text1").style.color="#000000"
        document.getElementById("text2").style.color="#000000"
        document.getElementById("text3").style.color="#000000"
        document.body.style.borderColor="#DDDDDD"
        isDark=false;
    }
}
function Darkmode()
{

}
let myButton=document.getElementById("a1");
myButton.onclick=changeImg;