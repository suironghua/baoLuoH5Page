$(function() {
	var Access_token = sessionStorage.getItem('Access_token');
	GetUrl(Access_token);
	ButtonClick();
	$('#tijiao2').click(function() {
		ReConfirm()
	})
});

function ButtonClick() {
	$('#pro-cont-btn-next').click(function() {
		$('#pro-cont-text').val(parseInt($('#pro-cont-text').val()) + 1)
	});
	$('#pro-cont-btn-pre').click(function() {
		if ($('#pro-cont-text').val() <= 0) {
			$('#pro-cont-text').val() = 0
		} else {
			$('#pro-cont-text').val(parseInt($('#pro-cont-text').val()) - 1)
		}
	})
};

function ReConfirm() {
	var Height = ($(window).height() - 120) / 2 + $(document).scrollTop();
	var Rheight = Height / 12;
	var Width = ($(window).width() - 200) / 2;
	var mask = '<div id="mask" style="width:' + $(window).width() + 'px;' + 'height:' + $('body').height() + 'px;position:absolute;z-index:10;left:0px;top:0px;opacity:0.5;background:black;"></div>';
	var Iframe = '<ifarme style="width:200px;height:10rem;border-radius:6px;border:0.2px solid #ffffff;display:block;background:white;position:absolute;top:' + Rheight + 'rem;left:' + Width + 'px;z-index:999;overflow:hidden;"></iframe>';
	$(mask).appendTo("body");
	$(Iframe).appendTo('body');
	$('<div style="width:200px;height:6.67rem;border-bottom:1px solid #ccc;color:#666;text-align:center;line-height:6.67rem;font-size:1.5rem;">确认购买吗？</div>').appendTo('ifarme');
	$('<button id="cancle">取消</button>').appendTo('ifarme');
	$('<button id="sure">确认</button>').appendTo('ifarme');
	$('#cancle').on('click', Miss) $('#sure').on('click', Miss) $('#sure').on('click', PostMessage)
}
function Miss() {
	$('ifarme').remove();
	$('#mask').remove()
}
function GetUrl(s) {
	var Gurl = window.location.search;
	var NewUrl = Gurl.substring(4);
	$.ajax({
		type: "get",
		url: 'https://api.baoluo.com/api/pointLottery/' + NewUrl,
		dateType: "json",
		headers: {
			'Authorization': 'Bearer ' + s
		},
		success: function(data) {
			var n1 = data.JoinNum;
			var n2 = data.UserNum;
			var bfb = (n1 / n2) * 29.5 + 1;
			var s = bfb.toString() + 'rem'
			var q = '<span style="width:3.42rem;height:1.4rem;font-size:1rem;color:#FFB300;display:inline-block;border-radius:.3rem;border:1px solid #FFB300;text-align:center;">进行中</span>';
			$('#product-page-cent-mian-top-img').children('img').attr('src', data.Icon);
			$('#product-page-cent-mian-middle').children('dl').children('dt').html(q + '&nbsp;&nbsp;' + data.Name);
			$('.point').html(data.point) $('.cost').html(data.Cost + '.00元') $('.a1').html(data.UserNum) $('.a2').html(data.UserNum - data.JoinNum) $('.product-page-cent-test-line').css('width', s)
		},
		error: function() {
			alert('图片加载失败')
		}
	})
}
function PostMessage() {
	var Access_token = sessionStorage.getItem('Access_token');
	var Gurl = window.location.search;
	var NewUrl = Gurl.substring(4);
	var Val = $('#pro-cont-text').val();
	$('#ProId').val(NewUrl);
	var ProIdVal = $('#ProId').val();
	var MyUrl = 'https://api.baoluo.com/api/pointLottery?id=' + ProIdVal + '&num=' + Val;
	$.ajax({
		type: "post",
		url: MyUrl,
		dateType: "json",
		data: {
			id: ProIdVal,
			num: Val
		},
		async: false,
		headers: {
			'Authorization': 'Bearer ' + Access_token
		},
		success: function(data) {
			if (data.code == 200) {
				$('#SuiBian').html(data.msg);
				$('#SuiBian').fadeIn(2000, function() {
					$('#SuiBian').fadeOut(1500, function() {
						window.location.href = "index.html"
					})
				})
			} else if (data.code == 405) {
				$('#SuiBian').html(data.msg);
				$('#SuiBian').fadeIn(2000, function() {
					$('#SuiBian').fadeOut(1500)
				})
			} else if (data.code == 406) {
				$('#SuiBian').html(data.msg);
				$('#SuiBian').fadeIn(2000, function() {
					$('#SuiBian').fadeOut(1500)
				})
			} else {
				$('#SuiBian').html(data.msg);
				$('#SuiBian').fadeIn(2000, function() {
					$('#SuiBian').fadeOut(1500)
				})
			}
		},
		error: function(data) {
			$('#SuiBian').html(data.msg);
			$('#SuiBian').fadeIn(2000, function() {
				$('#SuiBian').fadeOut(1500)
			})
		}
	})
};