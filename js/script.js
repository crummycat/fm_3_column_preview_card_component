// Helper function
let domReady = (cb) => {
  document.readyState === "interactive" || document.readyState === "complete"
    ? cb()
    : document.addEventListener("DOMContentLoaded", cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = "visible";
  var element = document.getElementsByClassName("preload");
  element[0].classList.remove("preload");
  console.log(document.body.style.visibility);
});

/* Credit to Alastair Campbell for providing the basis of this script */
// Link up the cards

function linkBoxes() {
  var boxes = document.querySelectorAll("article.card");

  boxes.forEach(function (box) {
    var link = box.querySelector("a");
    if (link) {
      var url = link.getAttribute("href");
      box.addEventListener("click", function () {
        location.href = url;
        link.preventDefault;
      });
      box.classList.add("linkify");
      link.addEventListener("focus", function () {
        box.classList.add("isfocused");
      });
      link.addEventListener("blur", function () {
        box.classList.remove("isfocused");
      });

      /* Inject CTA in to cards as visual affordance but hide from assistive tech announcements */
      box.insertAdjacentHTML(
        "beforeend",
        '<span class="cta" aria-hidden="true">Learn more</span>'
      );
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  if ("querySelector" in document) {
    linkBoxes();
  }
});
