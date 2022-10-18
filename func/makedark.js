var darkBg1="#333333";//#FFFFFF
var darkBgThick="#444444"//#e3e5e7
var darkText="#BBBBBB"//#000000
var lineDark="#666666"//#f1f2f3
var headerDark="#AAAAAA"//#e3e5e7
var darkBgThin="#000000"//#f6f7f8
dark();
function dark()
{
    /////////////////////////////////////////////////////////////
    var Header=document.getElementsByClassName("large-header");//bg1
    var searchBar=document.getElementsByClassName('nav-search-content');//bg1

    var channelButton=document.getElementsByClassName('channel-link');
    var iconText=document.getElementsByClassName('icon-title');
    //Videocard
    var videoCardSubText=document.getElementsByClassName('bili-video-card__info--author');
    var videoCard=document.getElementsByClassName('bili-video-card__info--right');
    var videoCardText=document.getElementsByTagName('a');
    var videoCardSub=document.getElementsByClassName('bili-video-card__wrap __scale-wrap');
    //var movieCard=
    ////////////////////////////////////////////////////////////
    if(document.getElementById('i_cecream')==null)
    {
        return;
    }
    document.getElementById('i_cecream').style.backgroundColor=darkBg1;
    document.getElementById('bili-header-banner-img').style.backgroundColor=darkBg1;
    document.getElementById('bili-header-banner-img').style.display='none';
    document.body.style.backgroundColor=darkBg1;
    //Header[0].style.backgroundColor=darkBg1;
    //searchBar[0].style.backgroundColor=darkBg1;
    //bili-video-card__info--right
    //bili-video-card__info--tit
    //channel-link
    //icon-title
    //bili-video-card__info--author
    //bili-header-banner-img
    //bili-video-card__wrap __scale-wrap
    //bili-header__bar slide-down
    document.getElementsByClassName('nav-search-content').item(0).style.backgroundColor=darkBg1;
    document.getElementsByClassName('large-header').item(0).style.backgroundColor=darkBg1;
    document.getElementsByClassName('bili-header__channel').item(0).style.backgroundColor=darkBg1;
    document.getElementById('nav-searchform').style.backgroundColor=darkBg1;
    document.getElementById('nav-searchform').style.borderColor=darkBg1;
    //nav-search-content
    ////////////////////////////////////////////////////////////
    Array.from(channelButton).forEach(element => {
        element.style.backgroundColor=darkBgThick;
        element.style.borderColor=darkBg1;

    });
    Array.from(document.getElementsByClassName("bili-movie-card__info--tit")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    Array.from(document.getElementsByClassName("bili-header__bar")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    //bili-header__banner
    Array.from(document.getElementsByClassName("bili-header__banner")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    //search-panel
    Array.from(document.getElementsByClassName("search-panel")).forEach(element => {
        element.style.backgroundColor=darkBg1;
        element.style.borderColor=lineDark;

    });
    //nav-search-input
    Array.from(document.getElementsByClassName("nav-search-input")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    //manga
    Array.from(document.getElementsByClassName("manga")).forEach(element => {
        element.style.backgroundColor=darkBg1;
    });
    //right-entry-icon
    Array.from(document.getElementsByClassName("right-entry-icon")).forEach(element => {
        element.style.color=darkText;
    });
    //减少资源开销
    var setTime;
    setTime=setInterval(update,500);
    window.addEventListener('focus',()=>{
        setTime=setInterval(update,500);
        //alert("start");
    })
    window.addEventListener('blur',()=>{
        window.clearInterval(setTime);
        //alert("stop!");
    })

    function update()
    {
        Array.from(videoCard).forEach(element=> {
            element.style.backgroundColor=darkBg1;
        }); 
        Array.from(videoCardText).forEach(element => {
            element.style.color=darkText;
        }); 
        Array.from(videoCardSubText).forEach(element => {
            element.style.backgroundColor=darkBgThick;
        });
        Array.from(videoCardSub).forEach(element => {
            element.style.backgroundColor=darkBg1;
        });
        //bili-movie-card__info __scale-disable
        Array.from(document.getElementsByClassName("bili-movie-card__info __scale-disable")).forEach(element => {
        element.style.backgroundColor=darkBg1;
        });
        //channel-floor bili-grid no-margin
        Array.from(document.getElementsByClassName("channel-floor bili-grid no-margin")).forEach(element => {
            element.style.borderColor=lineDark;
        });
        //bili-live-card__info--tit
        Array.from(document.getElementsByClassName("bili-live-card__info--tit")).forEach(element => {
            element.style.backgroundColor=darkBg1;
        });
        //header-channel-fixed-right-item
        Array.from(document.getElementsByClassName("header-channel-fixed-right-item")).forEach(element => {
            element.style.backgroundColor=darkBg1;
            element.style.borderColor=lineDark;
        });
        //header-channel
        Array.from(document.getElementsByClassName("header-channel")).forEach(element => {
            element.style.backgroundColor=darkBg1;
            element.style.borderColor=lineDark;
        });
        //bili-movie-card__wrap __scale-wrap
        Array.from(document.getElementsByClassName("bili-movie-card__wrap __scale-wrap")).forEach(element => {
            element.style.backgroundColor=darkBg1;
        });
        //bili-live-card__wrap __scale-wrap
        Array.from(document.getElementsByClassName("bili-live-card__wrap __scale-wrap")).forEach(element => {
            element.style.backgroundColor=darkBg1;
        });
        //class="bili-cheese-card__info __scale-disable"
        Array.from(document.getElementsByClassName("bili-cheese-card__info __scale-disable")).forEach(element => {
            element.style.backgroundColor=darkBg1;
        });
        //channel-floor bili-grid
        Array.from(document.getElementsByClassName("channel-floor bili-grid")).forEach(element => {
            element.style.borderColor=lineDark;
        });
        //v-popover-content
        Array.from(document.getElementsByClassName("v-popover-content")).forEach(element => {
            element.style.backgroundColor=darkBg1;
            element.style.borderColor=lineDark;
        });
        //v-popover is-bottom-start
        Array.from(document.getElementsByClassName("v-popover is-bottom-start")).forEach(element => {
            element.style.backgroundColor=darkBg1;
            element.style.borderColor=lineDark;
        });
        //avatar-panel-popover
        Array.from(document.getElementsByClassName("avatar-panel-popover")).forEach(element => {
            element.style.backgroundColor=darkBg1;
        });
        //trending-text
        Array.from(document.getElementsByClassName("trending-text")).forEach(element => {
            element.style.color=darkText;
        });
        //span
        Array.from(document.getElementsByTagName("span")).forEach(element => {
            element.style.color=darkText;
        });
        //track-switch-wrap
        Array.from(document.getElementsByClassName("track-switch-wrap")).forEach(element => {
            element.style.backgroundColor=darkBgThin;
        });
        //title
        Array.from(document.getElementsByClassName("title")).forEach(element => {
            element.style.color=darkText;
        });
        //trendings-rank search-rank-top
        Array.from(document.getElementsByClassName("trendings-rank search-rank-top")).forEach(element => {
            element.style.color='pink';
        });
    }
}
