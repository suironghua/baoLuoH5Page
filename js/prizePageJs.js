$(function(){var Access_token=sessionStorage.getItem('Access_token');GetPriceMessage(Access_token);$('h3').click(function(){var T=$(this).next('.collapse_body').css('height')if(T=='0px'){$('.open').css('display','none');$('.close').css('display','block')$(this).children('.close').css('display','none')$(this).children('.open').css('display','block')}if(T!=='0px'){$('.close').css('display','block')$('.open').css('display','none')$(this).children('.open').css('display','none')$(this).children('.close').css('display','block')}})window.alert=function(name){var iframe=document.createElement("IFRAME");iframe.style.display="none";iframe.setAttribute("src",'data:text/plain,');document.documentElement.appendChild(iframe);window.frames[0].window.alert(name);iframe.parentNode.removeChild(iframe)}});function GetPriceMessage(s){$.ajax({type:"get",url:"https://api.baoluo.com/V3/WinningRecord",dateType:"json",headers:{'Authorization':'Bearer '+s},success:function(data){var s=$('.collapse_body').length;var IData=data.Items;var Done=IData[0]one=Done.length _one=$('.collapse_body').eq(0);if(IData.length==0){$('.zanwushujv').css('display','block')}else{$('.zanwushujv').css('display','none')}for(var q=0;q<IData.length;q++){$('.collapseDiv').eq(q).show()}for(var i=0;i<IData.length;i++){$('.ProDate').eq(i).html('第'+IData[i][0].Phase+'期')};for(var c=1;c<one;c++){_one.append($('.collapse_content').eq(0).clone())}for(var s=0;s<one;s++){var ImgSrc=Done[s].Icon;var ImgName=Done[s].Name;var point=Done[s].point;var Cost=Done[s].Cost;var User=Done[s].User;_one.find('.collapse-flex-box-left-img').eq(s).children('img').attr('src',ImgSrc)_one.find('.collapse-flex-box-right').eq(s).children('dl').children('dd').html(ImgName)_one.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.point').html(point)_one.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.Cost').html(Cost+'元')if(User!=null){_one.find('.collapse-flex-NameMessage').eq(s).children('.UserNname').html(User.Name)_one.find('.collapse-flex-NameImg').eq(s).children('img').attr('src',User.Icon)_one.find('.collapse-flex-NameMessage-Numb').eq(s).html(User.PhoneNumber.substring(0,3)+'****'+User.PhoneNumber.substring(7,11))}}var Dtwo=IData[1]two=Dtwo.length _two=$('.collapse_body').eq(1);for(var c=1;c<two;c++){_two.append($('.collapse_content').eq(0).clone())}for(var s=0;s<two;s++){var ImgSrc=Dtwo[s].Icon;var ImgName=Dtwo[s].Name;var point=Dtwo[s].point;var Cost=Dtwo[s].Cost;var User=Dtwo[s].User;_two.find('.collapse-flex-box-left-img').eq(s).children('img').attr('src',ImgSrc);_two.find('.collapse-flex-box-right').eq(s).children('dl').children('dd').html(ImgName);_two.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.point').html(point)_two.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.Cost').html(Cost+'元')if(User!=null){_two.find('.collapse-flex-NameMessage').eq(s).children('.UserNname').html(User.Name)_two.find('.collapse-flex-NameImg').eq(s).children('img').attr('src',User.Icon)_two.find('.collapse-flex-NameMessage-Numb').eq(s).html(User.PhoneNumber.substring(0,3)+'****'+User.PhoneNumber.substring(7,11))}}var Dthree=IData[2]three=Dthree.length _three=$('.collapse_body').eq(2);for(var c=1;c<three;c++){_three.append($('.collapse_content').eq(0).clone())}for(var s=0;s<three;s++){var ImgSrc=Dthree[s].Icon;var ImgName=Dthree[s].Name;var point=Dthree[s].point;var Cost=Dthree[s].Cost;var User=Dthree[s].User;_three.find('.collapse-flex-box-left-img').eq(s).children('img').attr('src',ImgSrc);_three.find('.collapse-flex-box-right').eq(s).children('dl').children('dd').html(ImgName);_three.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.point').html(point)_three.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.Cost').html(Cost+'元')if(User!=null){_three.find('.collapse-flex-NameMessage').eq(s).children('.UserNname').html(User.Name)_three.find('.collapse-flex-NameImg').eq(s).children('img').attr('src',User.Icon)_three.find('.collapse-flex-NameMessage-Numb').eq(s).html(User.PhoneNumber.substring(0,3)+'****'+User.PhoneNumber.substring(7,11))}}var Dfour=IData[3]four=Dfour.length _four=$('.collapse_body').eq(3);for(var c=1;c<four;c++){_four.append($('.collapse_content').eq(0).clone())}for(var s=0;s<four;s++){var ImgSrc=Dfour[s].Icon;var ImgName=Dfour[s].Name;var point=Dfour[s].point;var Cost=Dfour[s].Cost;var User=Dfour[s].User;_four.find('.collapse-flex-box-left-img').eq(s).children('img').attr('src',ImgSrc);_four.find('.collapse-flex-box-right').eq(s).children('dl').children('dd').html(ImgName);_four.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.point').html(point)_four.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.Cost').html(Cost+'元')if(User!=null){_four.find('.collapse-flex-NameMessage').eq(s).children('.UserNname').html(User.Name)_four.find('.collapse-flex-NameImg').eq(s).children('img').attr('src',User.Icon)_four.find('.collapse-flex-NameMessage-Numb').eq(s).html(User.PhoneNumber.substring(0,3)+'****'+User.PhoneNumber.substring(7,11))}}var Dfive=IData[4]five=Dfive.length _five=$('.collapse_body').eq(4);for(var c=1;c<five;c++){_five.append($('.collapse_content').eq(0).clone())}for(var s=0;s<five;s++){var ImgSrc=Dfive[s].Icon;var ImgName=Dfive[s].Name;var point=Dfive[s].point;var Cost=Dfive[s].Cost;var User=Dfive[s].User;_five.find('.collapse-flex-box-left-img').eq(s).children('img').attr('src',ImgSrc);_five.find('.collapse-flex-box-right').eq(s).children('dl').children('dd').html(ImgName);_five.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.point').html(point)_five.find('.collapse-flex-box-right').eq(s).children('dl').children('dt').children('.Cost').html(Cost+'元')if(User!=null){_five.find('.collapse-flex-NameMessage').eq(s).children('.UserNname').html(User.Name)_five.find('.collapse-flex-NameImg').eq(s).children('img').attr('src',User.Icon)_five.find('.collapse-flex-NameMessage-Numb').eq(s).html(User.PhoneNumber.substring(0,3)+'****'+User.PhoneNumber.substring(7,11))}}},error:function(){alert('失败请重新试一次')}})};