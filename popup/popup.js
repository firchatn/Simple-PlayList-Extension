//var url = localStorage.getItem('music');
var url = "https://www.youtube.com/watch?v=3yyDul6FBDM&t=144s";
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

var id = youtube_parser(url);
//document.getElementById("player").src = "https://www.youtube.com/embed/" + id + "?autoplay=1" ;
 

function run(){
document.getElementById("but") 
var iframe = document.createElement('iframe');
iframe.width="300" ;
iframe.height="290" ;
iframe.src = "https://www.youtube.com/embed/" + id + "?autoplay=1" ;
document.body.appendChild(iframe);
document.getElementById("but").type = "hidden";
}
