$(function(){
	//--响应式网站
	//--首页焦点图
	//--首页久合案例展示
	//--首页久合案例视频
	//--首页久合产品
	//--首页常见问答
	$('.indexPart5').find('li').each(function(){
		var _this=$(this);
		$(this).find('.name').click(function(){
			if(_this.hasClass('on')){
				_this.removeClass('on');
				}else{
					$('.indexPart5').find('li').removeClass('on');
					_this.addClass('on');
					}
			})
		})
	//--首页久合服务
	//--右侧悬浮按钮
	//--顶部二维码
	//--手机版导航
	$('.navA').click(function(){
		$('.nav').addClass('on');
		})
	$('.nav').find('.close').click(function(){
		$('.nav').removeClass('on');
		})
	//--久合生发右侧滚动
	if($('.product').length>0){
		$(window).scroll(function(){
			var productT=$('.product').find('.content').offset().top;
			if($('.pageNav').length>0){
				productT=productT-$('.pageNav').height();
				}
			if($(window).scrollTop()>productT){
				$('.product').find('.box').addClass('on');
				}else{
					$('.product').find('.box').removeClass('on');
					}
			})
		}
	//--久合洗护菜单
	if($('.pageNav').length>0){
		$(window).scroll(function(){
			if($(window).scrollTop()>$('.pageNavD').offset().top){
				$('.pageNav').addClass('on');
				}else{
					$('.pageNav').removeClass('on');
					}
			})
		}
	//--N-1诊断服务
	$('.service_02').find('dl').each(function(){
		var _thisDl=$(this);
		_thisDl.find('dd').click(function(){
			_thisDl.find('dd').removeClass('on');
			$(this).addClass('on');
			})
		})
	//--新闻中心
	$('.news').find('li:last').css('border','0px');
	$('.listHover').find('li').hover(
	  function(){
		  $(this).addClass('on');
		  },
	  function(){
		  $(this).removeClass('on');
		  }
	)
	//-js单选
	//
	})