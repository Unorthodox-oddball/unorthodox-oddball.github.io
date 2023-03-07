// 스타일시트 연결
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'Stylesheet.css';
document.head.appendChild(link);

// contextmenu 이벤트 처리
document.addEventListener('contextmenu', event => {
  event.preventDefault();
});

// dragstart 이벤트 처리
document.addEventListener('dragstart', event => {
  event.preventDefault();
});

// F12 키 막기
document.addEventListener('keydown', event => {
  if (event.key === 'F12') {
    event.preventDefault();
    alert('F12 key has been blocked.');
  }
});

// 오디오 재생
document.addEventListener('click', function() {
  const audio = document.getElementById("myAudio");
  audio.play();
  audio.loop = true;
  document.removeEventListener('click', arguments.callee);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Control') {
        event.preventDefault();
    }
});

  function openPopup(fileName) {
    var myWindow = window.open(fileName, "PDF Viewer", "width=800, height=600");
    myWindow.focus();
  }

function openModal(pdfUrl) {
  // Get the modal and the close button
  var modal = document.getElementById("modal");
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Load the PDF into the PDF.js viewer
  var pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  var pdfContainer = document.getElementById("pdf-container");

  pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
    for (var i = 1; i <= pdfDoc.numPages; i++) {
      pdfDoc.getPage(i).then(function(page) {
        var canvas = document.createElement("canvas");
        canvas.className = "pdf-page";
        pdfContainer.appendChild(canvas);

        var viewport = page.getViewport({scale: 1.5});
        var context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
          canvasContext: context

