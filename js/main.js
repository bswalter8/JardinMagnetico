$(document).ready(function(){

	$('#btn-menu').click(function(){

		if( $('.btn-menu span').attr('class') == 'open' ){ 

			$('.btn-menu span').removeClass('open').addClass('close').css({'color':'#fff'});
			$('.full-menu').css({'right':'0'});

		}else{
			$('.btn-menu span').removeClass('close').addClass('open').css({'color':'#000'});
			$('.full-menu').css({'right':'-100%'});
		}

	});

});