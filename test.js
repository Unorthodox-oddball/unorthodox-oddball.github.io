// ============================================
// 공유 JavaScript 유틸리티
// 블로그 및 멀티미디어 통합 플랫폼
// ============================================

// 스타일시트 자동 연결
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'Stylesheet.css';
document.head.appendChild(link);

// ============================================
// 오디오 재생 기능 (배경음악 자동 재생)
// ============================================
document.addEventListener('click', function() {
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.play();
    audio.loop = true;
    document.removeEventListener('click', arguments.callee);
  }
});

// ============================================
// 네비게이션 탭 전환 기능
// ============================================
function switchTab(tabName) {
  // 모든 탭 콘텐츠 숨기기
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  // 선택된 탭 콘텐츠 표시
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }

  // 탭 버튼 스타일 업데이트
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  event.target.classList.add('active');
}

// ============================================
// 페이지 로드 시 첫 번째 탭 활성화
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const firstTab = document.querySelector('.tab-content');
  if (firstTab) {
    firstTab.style.display = 'block';
  }
  
  const firstButton = document.querySelector('.tab-button');
  if (firstButton) {
    firstButton.classList.add('active');
  }
});
