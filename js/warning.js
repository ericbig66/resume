
function warning(){
	var user_input = window.confirm('警告：\n您即將進入由html4所建立的過時網頁\n該網頁可能會自動下載音樂檔(3.mid)\n若您仍然要前往需自行承擔風險\n是否前往該網站?');
	if(user_input==true){
		window.open('http://chen1998.yabi.me/www/index.htm','_self');
	}
}