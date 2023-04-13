$(function(){
    $(".toggle").on("click",function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<i class='fa-solid fa-bars'></i>");
        }else{
            $(".menu").addClass("active");
            $(this).find("a").html("<i class=' fa-solid fa-xmark'></i>");
        }
   
})
});

let mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}