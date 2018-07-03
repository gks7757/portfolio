$(document).ready(function(){

	$('.remote_control').on('click',function () {
		$(this).addClass('active').siblings().removeClass('active');

		var idx=$(this).index();
		console.log(idx);
		if(idx==0){
			$('.tab_slide').css({'margin-left': 0 })
		} else {
			$('.tab_slide').css({'margin-left': -100+'%'})

		};
	});



}); 


