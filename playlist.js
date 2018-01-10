
if (document.domain === "www.youtube.com"){
var url = document.URL ;

var id = document.title;


if (localStorage.getItem('playlist') === null){
	var lists = {[id] : url };
	localStorage.setItem('playlist',JSON.stringify(lists));
}


}



