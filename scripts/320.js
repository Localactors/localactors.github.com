function showFlashMessage(e,t){flushFlashMessages();var n=$("form#mail_form");"notice"==t?$('<div class="'+t+'"><div class="box"><span class="symbol"><i>V</i></span><span class="msg">'+e+"</span></div></div>").hide().prependTo(n).fadeIn():"success"==t?$('<div class="'+t+'"><div class="box"><span class="symbol"><i>V</i></span><span class="msg">'+e+"</span></div></div>").hide().prependTo(n).fadeIn():"error"==t&&$('<div class="'+t+'"><div class="box"><span class="symbol"><i>V</i></span><span class="msg">'+e+"</span></div></div>").hide().prependTo(n).fadeIn()}function flushFlashMessages(){$("form#mail_form .notice").remove(),$("form#mail_form .error").remove(),$("form#mail_form .success").remove()}function changeLanguage(e){$(e).hide(),e.length*.5==i&&(i=0);var t=e[i];$(t).fadeIn(),i++}function fitMap(){var e=$("#slides").css("width");$("#slides ul li").css("width",e);var t=$("#slides ul li:first-child").css("height");$("#slides").css("height",t)}$(window).bind("resize",function(e){window.resizeEvt,$(window).resize(function(){clearTimeout(window.resizeEvt),window.resizeEvt=setTimeout(function(){fitMap(),$("#faq_accordion").accordion("refresh")},250)})}),$("input#mail_submit").click(function(e){e.preventDefault(),email=$("input#email").val(),list=$("input#mail_list").val(),$.ajax({data:{email:email,list:list,"boolean":!0},dataType:"html",url:"http://thedoersproject.com/mailinglist/subscribe",type:"post",success:function(e){switch(e){case"1":showFlashMessage("success","success");break;case"Some fields are missing.":showFlashMessage(e,"error");break;case"Invalid email address.":showFlashMessage(e,"error");break;case"Already subscribed.":showFlashMessage(e,"notice")}},error:function(e,t,n){console.log(t)}})});var subscribe=$("a.subscribe"),ask=$("a.ask"),submit=$("a.submit");subscribe.click(function(e){e.preventDefault(),$(window).scrollTo($("#mailing-list"),600),$("#sections_accordion").accordion("activate",0)}),ask.click(function(e){e.preventDefault(),$(window).scrollTo($("#faq"),600),$("#sections_accordion").accordion("activate",1)}),submit.click(function(e){e.preventDefault(),$(window).scrollTo($("#submit-project"),600),$("#sections_accordion").accordion("activate",2)});var i=0;$(document).ready(function(){function c(e){e<=0&&(a=0,p(),h(a,1)),e==1&&h(a,2),e==arSlides.length-1&&(a=arSlides.length-1,d())}function h(e,t){for(var n=t;n<arSlides.length;n++)(function(t){e!=t&&t.fadeOut("slow")})(arSlides[n])}function p(){u.css("visibility","hidden"),u.click(!1)}function d(){o.css("visibility","hidden"),o.click(!1)}function v(e){arSlides[e].delay(500).fadeIn("slow")}function m(){for(var e=0;e<arSlides.length;e++)(function(e){e.fadeOut("fast")})(arSteps[e])}function g(e){arSteps[e].delay(500).fadeIn("slow")}$("#sections_accordion").accordion({header:"header",collapsible:!0,heightStyle:"content",active:!1}),$("#faq_accordion").accordion({header:"h3",collapsible:!0,heightStyle:"content",active:!1});var e=$("li.step1"),t=$("li.step2"),n=$("li.step3");arSteps=[e,t,n];var r=$("li.slide1"),i=$("li.slide2"),s=$("li.slide3");arSlides=[r,i,s];var o=$("#arrow_right"),u=$("#arrow_left"),a=0,f=$("#map .banner-call ul li"),l=$.makeArray(f);changeLanguage(l),setInterval(function(){changeLanguage(l)},3e3),fitMap(),v(a),g(a),p(),o.click(function(){a++,c(a),v(a),m(),g(a),u.css("visibility","visible")}),$("#slides").on("swipe",function(e){e.direction==="right"&&(a--,c(a),v(a),m(),g(a),o.css("visibility","visible")),e.direction==="left"&&(a++,c(a),v(a),m(),g(a),u.css("visibility","visible"))}),u.click(function(){a--,c(a),v(a),m(),g(a),o.css("visibility","visible")})});