var than = $("#before-start");
var thongbao = $("#notification");
var a= $("#a"), b= $("#b"), c=$("#c"),diem=0;
var action;
function rDom( min, max){
    return Math.floor(Math.random() * (max-min) + min);
}
function endGame(){
    than.css("display","none");
    thongbao.css("display","block");
	$("#start").css("display","none");
	$('#foot-game').css({"display":"block", 'margin-top': '20%'});
}

function randombien(){
	if(diem==0){
		a.attr('value',rDom(1,5));
		b.attr('value',rDom(1,5));
		if(rDom(1,4)==3) c.attr('value',Number(a.val())+Number(b.val()));
		else c.attr('value',rDom(2,10));
	} 
    else{
		a.attr('value',rDom(1,diem*10));
		b.attr('value',rDom(1,diem*10));
		if(rDom(1,4)==3) c.attr('value',Number(a.val())+Number(b.val()));
		else c.attr('value',rDom(2,diem*20));
	}
}

$("#start").click(function(){
    than.css("display","block");
    thongbao.css("display","none");
	$('#foot-game').css('display',"block");
        randombien();
        action = setTimeout(endGame,5000);
		// gán lại điểm
		diem=0;
		$("#score").html("score:\ "+diem);
			$("#start").css('display','none');	
})

$("#dung").click(function(){
    if (Number(a.val())+Number(b.val())==c.val()){
		clearTimeout(action);
        randombien();
		// setTimeout(endGame,5000);
		//tăng điểm
        diem+=1;
        $("#score").html("score:"+diem);
		$("#happy").css('display',"block");
    }
    else {
		endGame();
		thongbao.before('<h3>Bạn ngu vkl</h3>')
	}
		setTimeout(function(){
				$('#happy').css('display','none');
			},1000)
	action = setTimeout(endGame,5000);		
});
$("#sai").click(function(){
    if (Number(a.val())+Number(b.val())!=c.val()){
        clearTimeout(action);
        randombien();
		//tăng điểm
        diem+=1;
        $("#score").html("score:\ "+diem);
		$("#happy").css('display',"block");
		
    }
    else {
		endGame();
		thongbao.after('<h3>Bạn ngu vkl</h3>')
	}
	setTimeout(function(){
			$('#happy').css('display','none');
		},1000)
	action = setTimeout(endGame,5000);
});
$("#really").click(function(){
	location.reload();
})
