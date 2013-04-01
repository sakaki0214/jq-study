$(function() {
	//date 130331
	$("#box1").click(function(){
	$(this).css("background","rgba(0,0,0,1)");
	});
	
	$(".box").hover(function(){
		$(this).css("border","1px solid #000");
	},
	function(){
		$(this).css("border","none");
	});
	
	//date 130401
	//http://www.webopixel.net/javascript/143.html
	var i = 0;
	var imgWidth = 121;
	setInterval(function(){
		if ( i >= imgWidth) i=0;
		i += 1;
		$("#bg-sample1").css("background-position",i+"px 0px");
		
	},100);

	//http://www.webopixel.net/javascript/718.html
	var speed = 3000;
	var bg1 = $("#bg-sample2");
	var bg2 = $("#bg-sample2-inner");
	cloudMove();
	setInterval(cloudMove,6000);
	function cloudMove(){
		bg1.animate({backgroundPositionX:"60px"},speed)
		.animate({backgroundPositionX:"0"},speed);
		bg2.animate({backgroundPositionX:"120px"},speed)
		.animate({backgroundPositionX:"0"},speed);
	};
	
	//http://semooh.jp/jquery/api/effects/animate/params,+%5Bduration%5D,+%5Beasing%5D,+%5Bcallback%5D/
	var btn1 = $("#btn-sample1");
	btn1.click(change1);
	function change1(){
		btn1.animate({
			width:"500px",
			height:"500px",
			opacity:"0.6"
		},3000);
	};
});