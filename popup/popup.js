//var lists = localStorage.getItem('playlist');
//lists = JSON.parse(lists);
var url = "https://www.youtube.com/watch?v=3yyDul6FBDM&t=144s";
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
var id = youtube_parser(url);
 

function creation(name,link){
var item = document.createElement('a');
var n = document.createElement('br');
var c = 'w3-button';
item.classList.add(c);
item.href = link  ;
item.id = id  ;
item.target = "_blank" ;
item.innerHTML = name ;
document.body.appendChild(item);
document.body.appendChild(n);
}

function listsVues(){
	/*
	for (var key in lists) {
    if (lists.hasOwnProperty(key)) {
        creation(key,lists[key]);
    }
}
*/

var i = 0 ;
while(i<10){
creation('but',url);
i++;
}


}
listsVues();

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
