
$(function(){
	//상대방 프로필 눌렀을 경우
	$(".pro1").on("click",function(){
		$("#popup_info").css("display","block");
		$("#profile_pop").attr("src",$("#profile_1").attr("src"));
		$("#name").text($(".lover1").text());
		$("#birth_y").text("1999");
		$("#birth_m").text("7");
		$("#birth_d").text("22");
		$("#email").text("deboner972@gmail.com");
		$("#btn_pop").text("번호 등록");
	});
	//본인 프로필 눌렀을 경우
	$(".pro2").on("click",function(){
		$("#popup_info").css("display","block");
		$("#profile_pop").attr("src",$("#profile_2").attr("src"));
		$("#name").text($(".lover2").text());
		$("#birth_y").text("1999");
		$("#birth_m").text("9");
		$("#birth_d").text("27");
		$("#email").text("toromstar@gmail.com");
		$("#btn_pop").text("프로필 편집");
	});
	//기념일 눌렀을 경우
	//백그라운드 이미지 설정 아이콘 눌렀을 경우
	//기념일 설정 아이콘 눌렀을 경우
	//캘린더 아이콘 눌렀을 경우
	/*팝업 닫기 버튼 눌렀을때*/
	$(".close").on("click",function(){
		$("#popup_info").css("display","none");
	});
});
