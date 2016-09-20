$(function() {
	GetSeesion();
	$('#btn-s').on('click', function() {
		toValidate()
	});
	$('input:text').focus(function() {
		$(this).attr('value', ''), $(this).css('color', '#333333')
	}) $('#address').focus(function() {
		$(this).css('color', '#333333')
	})
});

function ReConfirm() {
	var Niframe = Number($('ifarme').height());
	var Height = ($(window).height() - 120) / 2 + $(document).scrollTop();
	var Rheight = Height / 12;
	var Width = ($(window).width() - 200) / 2;
	var mask = '<div id="mask" style="width:' + $(window).width() + 'px;' + 'height:' + $('body').height() + 'px;position:absolute;z-index:10;left:0px;top:0px;opacity:0.5;background:black;"></div>';
	var Iframe = '<ifarme style="width:200pxrem;height:10rem;border-radius:6px;border:0.2px solid #ffffff;display:block;background:white;position:absolute;top:' + Rheight + 'rem;left:' + Width + 'px;z-index:999;overflow:hidden;"></iframe>';
	$(mask).appendTo("body");
	$(Iframe).appendTo('body');
	$('<div style="width:200px;height:6.67rem;border-bottom:1px solid #ccc;color:#666;text-align:center;line-height:6.67rem;font-size:1.5rem;">确认购买吗？</div>').appendTo('ifarme');
	$('<button id="cancle">取消</button>').appendTo('ifarme');
	$('<button id="sure">确认</button>').appendTo('ifarme');
	$('#cancle').on('click', Miss) $('#sure').on('click', Miss) $('#sure').on('click', PostBuyMessage)
}
function Miss() {
	$('ifarme').remove();
	$('#mask').remove()
}
function GetSeesion() {
	var BuyNumber = sessionStorage.getItem('class');
	var BuyName = sessionStorage.getItem('Name');
	var BuyPrice = sessionStorage.getItem('Pirce');
	var BuyPicture = sessionStorage.getItem('Icon');
	var BuyProId = sessionStorage.getItem('ProId');
	$('#Pname').html(BuyName);
	$('#many').html(BuyNumber);
	$('#price').html((BuyPrice * BuyNumber) + '积分');
	$('#PictureSrc').attr('src', BuyPicture) $('#BuyProId').attr('value', BuyProId);
	$('#BuyProNumber').attr('value', BuyNumber)
};

function PostBuyMessage() {
	var Access_token = sessionStorage.getItem('Access_token');
	var name = $('#name').val();
	var PhoneNumber = $('#miblename').val();
	var Zip = $('#placenub').val();
	var Addr = $('#address').val();
	var ProductId = $('#BuyProId').val();
	var ProductNum = $('#BuyProNumber').val();
	var ProductPrice = parseInt($('#price').html());
	var ProductPriceS = ProductPrice.toString();
	var attr = {
		"Buyer": name,
		"Address": {
			"Receiver": name,
			"PhoneNumber": PhoneNumber,
			"Zip": Zip,
			"Addr": Addr
		},
		"OrderDetails": [{
			"ProductId": ProductId,
			"ProductNum": ProductNum,
			"ProductPrice": ProductPriceS
		}]
	}
	var jsondata = JSON.stringify(attr);
	$.ajax({
		type: "post",
		url: 'https://api.baoluo.com/api/orders',
		dateType: "json",
		data: jsondata,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Authorization': 'Bearer ' + Access_token
		},
		success: function(data) {
			if (data.code == 200) {
				$('#WrongMessage').html(data.msg);
				$('#WrongMessage').fadeIn(2000, function() {
					$('#WrongMessage').fadeOut(1500, function() {
						window.location.href = "index.html"
					})
				})
			} else if (data.code == 410) {
				$('#WrongMessage').html(data.msg);
				$('#WrongMessage').fadeIn(3000, function() {
					$('#WrongMessage').fadeOut(1500, function() {
						window.location.href = "orderPage.html"
					})
				})
			} else {
				$('#WrongMessage').html("购买失败");
				$('#WrongMessage').fadeIn(3000, function() {
					$('#WrongMessage').fadeOut(1500, function() {
						window.location.href = "orderPage.html"
					})
				})
			}
		},
		error: function() {
			$('#WrongMessage').html("提交失败");
			$('#WrongMessage').fadeIn(2000, function() {
				$('#WrongMessage').fadeOut(1500, function() {
					window.location.href = "orderPage.html"
				})
			})
		}
	})
};

function toValidate() {
	var val = new validate({
		rules: {
			name: "notEmpty",
			miblename: "mobile",
			placenub: "zipCode",
			address: "notEmpty"
		},
		submitFun: function() {
			ReConfirm()
		}
	})
}