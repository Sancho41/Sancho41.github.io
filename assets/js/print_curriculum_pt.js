var printView = document.querySelector("#print-view");

var converter = new showdown.Converter();

axios.get("README.PT_BR.md").then(function (e) {
  var html = converter.makeHtml(e.data);
  printView.innerHTML = html;
  if (window.location.hash === "#print") callPrint();
});

function callPrint() {
  var imgs = document.images,
    len = imgs.length,
    counter = 0;

  [].forEach.call(imgs, function (img) {
    if (img.complete) incrementCounter();
    else img.addEventListener("load", incrementCounter, false);
  });

  function incrementCounter() {
    counter++;
    if (counter === len) {
      window.print();
    }
  }
}
