  var arr = [0]
  var num = 0
//console.log($(".fenlei-right>div").eq(0).height())

$(".fenlei-right>div").each(function(index){
	
	num += $(".fenlei-right>div").eq(index).height()+3;
	arr.push(num);
	
})
//console.log(arr)
$(".fenlei-left li").on("click",function(){
	var index = $(this).index();
	$("li").css({background:"#f4f5f7",color:"black"})
	$(this).css({background:"#FFFFFF",color:"#f99296"})
	$(".fenlei-right").animate({scrollTop:arr[index]},500)
//	console.log({scrollTop:arr[index]})
})



