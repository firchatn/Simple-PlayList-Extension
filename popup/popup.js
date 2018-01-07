var url = localStorage.getItem('music');
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

var id = youtube_parser(url);
document.getElementById("myImg").src = "https://www.youtube.com/embed/" + id + "?autoplay=1" ; 
