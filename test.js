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
