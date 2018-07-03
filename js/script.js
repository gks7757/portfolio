$(document).ready(function(){
	
	//브라우저별

	function isBrowserCheck(){ 
		var agt = navigator.userAgent.toLowerCase();
			 if (agt.indexOf("chrome") != -1) return 'Chrome';
			 if (agt.indexOf("opera") != -1) return 'Opera';
			 if (agt.indexOf("staroffice") != -1) return 'Star Office';
			 if (agt.indexOf("webtv") != -1) return 'WebTV';
			 if (agt.indexOf("beonex") != -1) return 'Beonex';
			 if (agt.indexOf("chimera") != -1) return 'Chimera';
			 if (agt.indexOf("netpositive") != -1) return 'NetPositive';
			 if (agt.indexOf("phoenix") != -1) return 'Phoenix';
			 if (agt.indexOf("firefox") != -1) return 'Firefox';
			 if (agt.indexOf("safari") != -1) return 'Safari';
			 if (agt.indexOf("skipstone") != -1) return 'SkipStone';
			 if (agt.indexOf("netscape") != -1) return 'Netscape';
			 if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
			 if (agt.indexOf("msie") != -1) { 
			 	var rv = -1; if (navigator.appName == 'Microsoft Internet Explorer') { 
			 		var ua = navigator.userAgent; 
			 		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			 		if (re.exec(ua) != null) rv = parseFloat(RegExp.$1); 
			 	} 
			 	return 'Internet Explorer '+rv; 
			} 
	} ;


	if(isBrowserCheck()=="Safari") {

		$('.P_1').removeClass('P_one_ani').addClass('P_one_ani_2');
		$('.P_2').removeClass('P_two_ani').addClass('P_two_ani_2');

	};

	//메인 애니메이션 익스플로러
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		$('.P_1').removeClass('P_one_ani');
		$('.P_2').removeClass('P_two_ani');
		$('.F1').removeClass('F_one_ani F_one');
		$('.F2').removeClass('F_two_ani F_two');
		$('.F3').removeClass('F_three_ani F_three');


			var $bg2 = $(".bg_02");
			var $P1 = $(".P_txt");
			var $F1 = $(".F_txt");
			$bg2.animate({ left : "0" },800);
			$P1.animate({ opacity : "1" },800);

			$.when($bg2, $P1).then(function() {
				$('.ort_txt').animate({"margin-left": 0 },800,function(){
						// $F1.show();
						$F1.animate({ opacity : "1" },800);
					$(".bg_01").animate({ left : "-52%" },800,function(){
						$('.olio_txt').animate({"margin-left": 0 },800);
					});
				});
				
			});


	} else { //메인 애니메이션 
	

		$(".P_txt").hide();
		$(".F_txt").hide();
		var $bg2 = $(".bg_02");
		var $P1 = $(".P_txt");
		var $F1 = $(".F_txt");
		$bg2.animate({ left : "0" },800);
		$P1.show();
		$P1.css('opacity','1');
		

		$.when($bg2, $P1).then(function() {
			$('.ort_txt').animate({"margin-left": 0 },800,function(){
					$F1.show();
					$F1.css('opacity','1');
				$(".bg_01").animate({ left : "-52%" },800,function(){
					$('.olio_txt').animate({"margin-left": 0 },800);
				});
			});
			
		});
	
	};

	var W = [];
	var H = [0];



	$('.control li p span').eq(now()).css('margin-right','15px');
	$('.control li .line_wrap .line').eq(now()).addClass('line_chk');
	$('.name li').eq(now()).css('top','0');
	$('#page_view .NC').text(now()+1);

	function now(){ // now함수를 선언

		var X; // 리턴시켜줄 가상의 변수 선언
		var T = $(window).scrollTop(); // 현재 문서의 스크롤탑위치를 변수에 대입
		var WH = $(window).height(); // 브라우저의 높이

		var h = 0;
		$('section').each(function (i) {// section의 갯수만큼 loop

			
			T+(WH/3)>= h ? X = i : false; // loop될때마다 각 section의 높이값을 더해서 비교
			h+=$(this).height();

			H[i+1] = h;

		});
		return X; // X변수를 함수호출위치로 리턴

	}



	function active (i){

		var CI = $('#contact').index();

		if (i>=0&&i<$('section').length) {

			$('.control li p span').not(':eq('+i+')').css('margin-right','-206px');
			$('.control li p span').eq(i).css('margin-right','15px');

			$('.control li .line_wrap .line').not(':eq('+i+')').removeClass('line_chk');
			$('.control li .line_wrap .line').eq(i).addClass('line_chk');

			$('.name li').not(':eq('+i+')').css('top','-30px');
			$('.name li').eq(i).css('top','0');

			$('#page_view .NC').text(i+1);

			
			if (i==CI) $('.contact_bg').animate({'width' : '48%'},700,function () {
				$('.ctt').animate({'margin-left' : '0'},600);
				
			});

			

		}


	}

	var moving = false;
	function move(i){

		moving = true;

		if ($('html,body').is(':animated')) return false;
		$('html,body').clearQueue().animate({scrollTop: H[i]},600, function () {
			
			active(i);
			moving = false;
		});

		
	}

	$(window).on('mousewheel', function(){

		var direction;
		var D = event.wheelDelta;

		//휠델타가없으면 조건부처리

		D > 0 ? direction = -1 : direction = 1;
		

			direction ? move(now()+direction) : active(now());

			return false;
		

	});


	var old_T = 0;

	var n_bar = 1;
	var cnt_idx  = $('.exp_cnt li').index();
	var expic_idx  = $('.ex_pic li').index();
	var Z = 0;
	function f1 (i){
		$('.exp_cnt .bar').css({'height' : (16*(i))+'%'});
	}
		
	var Z_play = [];
	var state;
	var first_play;

	Z_idx=0;

	function auto_Z(){

		if (state) return false;

		Z_play[Z_idx] = setInterval(function(){
			$('.exp_cnt .bar').show();
			$('.ex_pic li').eq(Z).addClass('selected').siblings().removeClass('selected');
			$('.exp_cnt_ul li').eq(Z).addClass('btn_add');
			if (Z<7) {
				f1(Z++)
			} else {
				Z=0;
				$('.exp_cnt .bar').hide();
				$('.exp_cnt_ul li').removeClass('btn_add');
				f1(Z);
			}
		}, 2000);

		first_play = true;
	}

	$('.exp_cnt_ul li').on('click', function(){

		state = false;
		clearInterval(Z_play[Z_idx]);


		var idx = $(this).index();

		f1(idx);
		Z = idx;

		$('.exp_cnt_ul li').removeClass('btn_add');
		$('.ex_pic li').eq(Z).addClass('selected').siblings().removeClass('selected');
		for (var i = 0; i < $('.ex_pic li').length; i++) {
			if (i<=idx) $('.exp_cnt_ul li').eq(i).addClass('btn_add');
		}


		setTimeout(function(){

			auto_Z();
			state = true;
		}, 3000);

	});

	$('.ex_pic li').eq(0).addClass('selected').siblings().removeClass('selected');

	$(window).on('scroll', function(){

		var new_T = $(this).scrollTop();

		if (moving) return false;

		active(now());

		old_T = new_T;

		if(now()==1&&!first_play) auto_Z();

	});

	$('.control li').on('click', function(){

		var idx = $(this).index();
		move(idx);
	});

	$(window).on('keydown',function(){

		if (event.key=='PageDown'||event.key=='ArrowDown') {

			event.preventDefault();
			move(now()+1);
		} else if (event.key=='PageUp'||event.key=='ArrowUp'){

			event.preventDefault();
			move(now()-1);
		}
	});



	// 패럴랙스 아이패드
	var ts;
	$(document).bind('touchstart', function (e){
	   ts = e.originalEvent.touches[0].clientY;
	});

	$(document).bind('touchend', function (e){
	   var te = e.originalEvent.changedTouches[0].clientY;
	   if(ts > te+5){
	      move(now()+1);
	   }else if(ts < te-5){
	      move(now()-1);
	   }
	});

	
	$(window).resize(function(){ // 브라우저가 리사이징되면...

		//navigator 브라우저의 정보를 가지고 있는 객체
		navigator.maxTouchPoints>0 ? $('.ctrl a').hide() : $('.ctrl a').show();
		//maxTouchPoints 컴퓨터와 모바일의 차이는 포인터의 개수 차이. 
		
	}).resize(); //모바일 화면에서 리사이즈가 안되면 좌우 내비가 계속 나타나는 현상때문에 로딩되자마자 리사이즈를 다시 시켜줌


	
	//메뉴호버

	$('.menu li').hover(function(){
		
		$(this).find('a').css('color','#fff').parent('li').siblings().find('a').css('color','#6f6f6f');
		
	},function(){

		$(this).find('a').css('color','#fff').parent('li').siblings().find('a').css('color','#fff');
		
	});


	$('.modal').on('click', function() {

		$('nav').css({'left': -25+'%'});
		$(this).hide();

	});

	$('.menu li').click(function () {
		$('nav').css({'left': -25+'%'});
		$('.modal').hide();
	})

	//메뉴버튼

	$('.mn_btn').on('click', function() {

		$('nav').css({'left': 0});
		$('.modal').show();

	});



	//about_btn

	$('.about_btn .me p').css('color','#1a1a1a');

	$('.about_btn .about_btn_b').on('click',function(){

		var idx=$(this).index();

		$(this).addClass('bdtc').siblings().removeClass('bdtc');
		$('.about_btn_b').find('p').css('color','#c0c0c0');
		$(this).find('p').css('color','#1a1a1a');

		if(idx==0){
			$('.about_cnt .cnt_move').css({'margin-left':0})
		} else {
			$('.about_cnt .cnt_move').css({'margin-left': -100+'%'})

		}

	});


	//about_skill

	var C_L;
	var C_W;

	$('.ski_text span').on('click',function(){
		
		var idx = ($(this).index())+($(this).parent().index()*2);


		$('.ski_tri').eq(idx).css({
			"border-bottom-color":"rgba(0, 0, 0, 0.70)",
			"z-index" : "1"
		}).siblings('.ski_tri').css({
			"border-bottom-color":"rgba(0, 0, 0, 0.10)",
			"z-index" : "0"
		});

		$('.ski_tri').find('.counter').hide();
		$('.ski_tri').eq(idx).find('.counter').show();

		 C_L = $(this).position().left;
		 C_W = $(this).width()/1.5;

		$('.ski_C').css("left", C_L+C_W-9);
		$('.ski_text span').css('color','#ddd');
		$(this).css('color','#1a1a1a');

		$('.counter').each(function() {
		  var $this = $(this),
		      countTo = $('.ski_tri').eq(idx).find('.counter').attr('data-count');

		  $({ countNum: 0}).animate({
		    countNum: countTo
		  },

		  {
		    duration: 800,
		    easing:'linear',
		    step: function() {
		      $('.ski_tri').eq(idx).find('.counter').text(Math.floor(this.countNum));
		    },
		    complete: function() {
		      $('.ski_tri').eq(idx).find('.counter').text(this.countNum);
		    }

		  });  
  
		});
		

	});


	$('.skill').on('click',function () {

		$('.ski_tri').eq(0).css({
			"border-bottom-color":"rgba(0, 0, 0, 0.70)",
			"z-index" : "1"
		}).siblings('.ski_tri').css({
			"border-bottom-color":"rgba(0, 0, 0, 0.10)",
			"z-index" : "0"
		});

		$('.ski_tri').find('.counter').hide();
		$('.ski_tri').eq(0).find('.counter').show();


		$('.ski_C').css("left", "25.38px");
		$('.ski_text span').eq(0).css('color','#ddd');
		$('.ski_text span').eq(0).css('color','#1a1a1a');

		$('.counter').each(function() {
		  var $this = $(this),
		      countTo = $('.ski_tri').eq(0).find('.counter').attr('data-count');

		  $({ countNum: 0}).animate({
		    countNum: countTo
		  },

		  {
		    duration: 800,
		    easing:'linear',
		    step: function() {
		      $('.ski_tri').eq(0).find('.counter').text(Math.floor(this.countNum));
		    },
		    complete: function() {
		      $('.ski_tri').eq(0).find('.counter').text(this.countNum);
		    }

		  });  
  
		});
		

	});

	var B_W = [];

	for (var i = 0; i < $('.ski_tri').length; i++) {
		
		B_W[i] = $('.ski_tri').eq(i).css('borderBottomWidth').replace('px','');
		$('.ski_tri').eq(i).find('.ski_wrap').css({'height':B_W[i]});
		$('.ski_tri').eq(i).find('.ski_wrap').css({'width':B_W[i]});
	}
		

	//web_design
	var nowidx = 0;
	var wbidx = 0;
	var speed = 600;
	$('.web_icon a').on('click',function () {

		if( nowidx==0&&($(this).hasClass("prev")) || $(".web_cate").length-1==nowidx&&($(this).hasClass("next")) ) return false; 
		if(!$(this).hasClass('more')) event.preventDefault();
		

		if ($(this).hasClass('prev')){
			web_slide(-1);
			frame_slide(-1);		
		} else if ($(this).hasClass('next')) {
			web_slide(1);
			frame_slide(1);	
		};


	});

	$('.more').on('click',function () {
		if(nowidx==0){
			$(this).attr('href','https://gks7757.github.io/portfolio/sub/info_twosome.html')
		} else if (nowidx==1) {
			$(this).attr('href','https://gks7757.github.io/portfolio/sub/info_leeyoung.html')
		} else if (nowidx==2) {
			$(this).attr('href','https://gks7757.github.io/portfolio/sub/info_portfolio.html')
		};
	});

	function web_slide(i) {

		if ($('.web_all').is(':animated')) return false;

		nowidx+=i;
		$('.web_all').stop().animate({'margin-left': (nowidx*-1)+'00%'});
	};

	function frame_slide(i) {

		if ($('.frame_ul').is(':animated')) return false; 
		wbidx+=i 
		$('.frame_ul').stop().animate({'margin-left': (wbidx*-1)+'00%'}); 

	}; //web_design end


	//work 

	var src;

	$('.swiper-slide').on('click',function () {
	 	var S_T = $(this).index();
	 	$(".W_pop_up").show();
	 	src = $(this).find('img').attr('src');

	 	$('.W_pop').append("<img class='theImg' src='"+src+"'/>");

	 	//iframe 넣기

	});

	$(".W_pop_up").on('click',function(){

		$(".W_pop_up").hide();
		$(".theImg").remove();

	});



	$('#Message').on('click',function () {

		$('.TA_line').css('width','0');

	});

}); //끝




