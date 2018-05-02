function anchor (e) {

	var url = location.href;
	location.href = "#"+e;
	 history.replaceState(null,null,url);
}