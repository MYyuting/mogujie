	$(function(){
		function  run() {
       	 	var x = 500;       
     		var y = 0;  
       		var num = Math.floor(Math.random() * 3 + 1);
       		var index=$('.live').children('img').length;
       		var rand = parseInt(Math.random() * (x - y + 1) + y); 
       		
       		$(".live").append("<img src='' class='heart_img'>");
       		if($(".heart_img").length == 50){
       			$(".heart_img").remove()
       		}
       		$('.heart_img:eq(' + index + ')').attr('src','../../images/'+num+'.png')
       		$(".heart_img").animate({
       			bottom:"800px",
       			opacity:"0",
       			left: rand,
       		},2000)
	    }
	  var timer = setInterval(run,200)
	})
