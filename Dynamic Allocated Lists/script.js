/***************FRONTPAGE***************/
function z()
{
  document.getElementById("semicircle1").style.zIndex="999";
  document.getElementById("semicircle2").style.zIndex="999";
  
  document.getElementById("inner2").style.transform="translate(-50%,0) rotate(180deg)";
  document.getElementById("inner2").style.transition="1s";

  document.getElementById("gate1").style.marginTop="-100%";
  document.getElementById("gate1").style.transition="5s";
  document.getElementById("gate1").style.transitionDelay="1s";
  document.getElementById("gate1").style.visibility="hidden";

  document.getElementById("inner").style.visibility="hidden";
  document.getElementById("inner").style.transitionDelay="1s";

  document.getElementById("gate2").style.marginTop="100%";
  document.getElementById("gate2").style.transition="5s";
  document.getElementById("gate2").style.transitionDelay="1s";
  document.getElementById("gate2").style.visibility="hidden";

  
  document.getElementById("semicircle1").style.visibility="hidden";
  document.getElementById("semicircle1").style.transitionDelay="1s";
  
  
  document.getElementById("semicircle2").style.visibility="hidden";
  document.getElementById("semicircle2").style.transitionDelay="1s";

}


/***************HEADER***************/
function d() 
{
  document.getElementById("Dropdown").classList.toggle("show");
}
function d2()
{
  document.getElementById("Dropdown2").classList.toggle("show");
}
function d3()
{
  document.getElementById("Dropdown3").classList.toggle("show");  
}
function rs()
{
  document.getElementById("B").classList.toggle("remove");
  document.getElementById("B1").classList.toggle("show");
}
function rs2()
{
  document.getElementById("L").classList.toggle("remove");
  document.getElementById("L1").classList.toggle("show");
}
function rs3()
{
  document.getElementById("G").classList.toggle("remove");
  document.getElementById("G1").classList.toggle("show");
}


  /***************CONTAINER***************/
function s1()
{
  document.getElementById("content1").style.width="0%";
  document.getElementById("content1").style.transition="1.5s";
  document.getElementById("content2").style.marginLeft="0";
  document.getElementById("content2").style.width="100%";
  document.getElementById("content2").style.left="0";
  document.getElementById("content2").style.transition="1.5s";
}
function s2()
{
  document.getElementById("content1").style.width="100%";
  document.getElementById("content1").style.transition="1.5s";
  document.getElementById("content2").style.marginLeft="100%";
  document.getElementById("content2").style.width="0%";
  document.getElementById("content2").style.transition="1.5s";
    
}