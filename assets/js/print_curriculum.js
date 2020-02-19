var printView = document.querySelector("#print-view");

var converter = new showdown.Converter();

axios.get("README.md").then(function(e) {
  var html = converter.makeHtml(e.data);
  printView.innerHTML = html;
  window.print()
});