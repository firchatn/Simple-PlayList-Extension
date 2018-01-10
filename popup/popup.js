//var url = localStorage.getItem('music');
var url = "https://www.youtube.com/watch?v=3yyDul6FBDM&t=144s";
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
var id = youtube_parser(url);
 

function creation(id){
var item = document.createElement('a');
var n = document.createElement('br');
var c = 'w3-button';
item.classList.add(c);
item.href = url  ;
item.id = id  ;
item.target = "_blank" ;
item.innerHTML = "name" ;
document.body.appendChild(item);
document.body.appendChild(n);
}

function lists(){
var i = 0 ;
while(i<10){
creation('but');
i++;
}


}
lists();

/*
function run(){
var link = document.getElementById("but") 
var iframe = document.createElement('iframe');
iframe.width="300" ;
iframe.height="290" ;
iframe.src = "https://www.youtube.com/embed/" + id + "?autoplay=1" ;
document.body.appendChild(iframe);
document.getElementById("but").type = "hidden";
}
*/
