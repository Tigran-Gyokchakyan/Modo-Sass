// menu scrol animation
$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".top-menu").addClass("menu-2");
    $(".menu a").addClass("linkcolor");
    $(".burger-menu span").addClass("burgercolor");
  } else {
    $(".top-menu").removeClass("menu-2");
    $(".menu a").removeClass("linkcolor");
    $(".burger-menu span").removeClass("burgercolor");
  }
});
/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/* burger-menu */
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}