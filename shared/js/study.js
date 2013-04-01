$(function() {
	$("#box1").click(function(){
	$(this).css("background","rgba(0,0,0,1)");
	});
	
	$(".box").hover(function(){
		$(this).css("border","1px solid #000");
	},
	function(){
		$(this).css("border","none");
	});
});