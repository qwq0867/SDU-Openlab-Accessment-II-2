var darkBg1="#333333";//#FFFFFF
var darkBgThick="#444444"//#e3e5e7
var darkText="#BBBBBB"//#000000
var lineDark="#666666"//#f1f2f3
var headerDark="#AAAAAA"//#e3e5e7
var darkBgThin="#000000"//#f6f7f8
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
document.getElementById('app').style.backgroundColor=darkBg1;
Array.from(document.getElementsByClassName("bili-header__bar mini-header")).forEach(element => {
    element.style.backgroundColor=darkBg1;
});
Array.from(document.getElementsByClassName("title")).forEach(element => {
    element.style.color=darkText;
});
Array.from(document.getElementsByTagName("h1")).forEach(element => {
    element.style.color=darkText;
});
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
//bili-comment browser-pc
Array.from(document.getElementsByClassName("bili-comment browser-pc")).forEach(element => {
    element.style.backgroundColor=darkBg1;
});