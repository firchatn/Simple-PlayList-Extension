alert('oki');
var url = document.URL ;
var title = document.title;

if (localStorage.getItem('playlist') === null){
	var lists = {title : url };
	localStorage.setItem('playlist',lists);
}






