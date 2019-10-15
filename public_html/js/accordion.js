var acc = document.getElementsByClassName("accordion");
// var object = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {

      panel.style.display = "none";

    }
    else {
      $('.panel').css('display', 'none');
      panel.style.display = "flex";
    }
  });
}
