// Start Burger Menu
const listBar = document.getElementById("bar");
const sideBar = document.querySelector(".content");
const closeBtn = document.querySelector(".close");
console.log(sideBar);
listBar.addEventListener("click", () => {
  sideBar.classList.toggle("appear");
});
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("appear");
});
document.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    sideBar.classList.remove("appear");
  }
});
// End Burger Menu
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".link");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});
