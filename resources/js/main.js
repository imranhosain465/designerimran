function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$(".js--services-section").waypoint(function(e){"down"==e?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});new Typed(".test",{strings:["I am Md Imran Hosain!","I am a Web designer!","I am a wordpress Designer!","I am a Logo designer!","I am a Business Card Designer!"],typeSpeed:50,backSpeed:50,backdelay:1500,loop:!0});$("nav ul li a").click(function(){$("nav ul li a").removeClass("active"),$(this).addClass("active")}),$("nav a img.logo").click(function(){$("nav ul li:first-child a").removeClass("active")});mixitup(".container")}),$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},800,function(){window.location.hash=a})}});
$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll");