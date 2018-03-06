		var wid=document.documentElement.clientWidth;
		document.documentElement.style.fontSize=wid/375*100+"px";
		setTimeout(function(){
				window.onresize=function(){
					document.location.reload();
				}
		},400)
