var darkBg1="#FFFFFF";//#FFFFFF
var darkBgThick="#e3e5e7"//#e3e5e7
var darkText="#000000"//#000000
var lineDark="#f1f2f3"//#f1f2f3
var headerDark="#e3e5e7"//#e3e5e7
var darkBgThin="#f6f7f8"//#f6f7f8
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
document.getElementById('app').style.backgroundColor=darkBg1;
//bpx-player-sending-bar
Array.from(document.getElementsByClassName("bpx-player-sending-bar")).forEach(element => {
    element.style.backgroundColor=darkBg1;
});
//bpx-player-dm-input
Array.from(document.getElementsByClassName("bpx-player-dm-input")).forEach(element => {
    element.style.backgroundColor=darkBg1;
    element.style.borderColor=darkBg1;
});
//bpx-player-video-btn-dm
Array.from(document.getElementsByClassName("bpx-player-video-btn-dm")).forEach(element => {
    element.style.backgroundColor=darkBg1;
    element.style.borderColor=darkBg1;
});
//tag-link
Array.from(document.getElementsByClassName("tag-link")).forEach(element => {
    element.style.backgroundColor=darkBg1;
});
//nav-search-input
Array.from(document.getElementsByClassName("nav-search-input")).forEach(element => {
    element.style.backgroundColor=darkBg1;
});
//reply-box fixed-box
Array.from(document.getElementsByClassName("reply-box fixed-box")).forEach(element => {
    element.style.backgroundColor=darkBg1;
});
//center-search__bar
document.getElementById("nav-searchform").style.backgroundColor=darkBg1;
//减少资源开销
update();
var t=5000;
var setTime;
setTime=setInterval(update,t);
function update()
{
    Array.from(document.getElementsByClassName("bili-header__bar mini-header")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    Array.from(document.getElementsByClassName("title")).forEach(element => {
        element.style.color=darkText;
    });
    Array.from(document.getElementsByTagName("h1")).forEach(element => {
        element.style.color=darkText;
    });
    Array.from(document.getElementsByTagName("a")).forEach(element => {
        element.style.color=darkText;
    });
    Array.from(document.getElementsByTagName("span")).forEach(element => {
        element.style.color=darkText;
    });
    //v-popover-content
    Array.from(document.getElementsByClassName("v-popover-content")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    //activity_vote
    document.getElementById('activity_vote').style.display='none';
    //user-name
    Array.from(document.getElementsByClassName("user-name")).forEach(element => {
        element.style.color=darkText;
    });
    //bili-comment browser-pc
    Array.from(document.getElementsByClassName("bili-comment browser-pc")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    //reply-box fixed-box
    Array.from(document.getElementsByClassName("reply-box fixed-box")).forEach(element => {
        element.style.backgroundColor=darkBg1;
        element.style.borderColor=darkBg1;
    });
    //bui-collapse-header
    Array.from(document.getElementsByClassName("bui-collapse-header")).forEach(element => {
        element.style.backgroundColor=darkBg1;
        element.style.borderColor=darkBg1;
        element.style.borderRadius='0px';
    });
    if(document.hidden==true)
    {
        location.reload();
    }
}