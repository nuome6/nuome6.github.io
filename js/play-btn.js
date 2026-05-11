// 英语文章音频播放器 - 极简播放按钮

function togglePlay(btn) {
  const span = btn.previousElementSibling;
  if (!span) return;
  const audio = span.querySelector('audio');
  if (!audio) return;

  // 停止所有其他音频
  document.querySelectorAll('.play-btn.playing').forEach(function(otherBtn) {
    if (otherBtn !== btn) {
      otherBtn.classList.remove('playing');
      otherBtn.textContent = '▶';
      const otherSpan = otherBtn.previousElementSibling;
      if (otherSpan) {
        const otherAudio = otherSpan.querySelector('audio');
        if (otherAudio) otherAudio.pause();
      }
    }
  });

  if (audio.paused) {
    audio.play();
    btn.classList.add('playing');
    btn.textContent = '⏸';
    audio.onended = function() {
      btn.classList.remove('playing');
      btn.textContent = '▶';
    };
  } else {
    audio.pause();
    btn.classList.remove('playing');
    btn.textContent = '▶';
  }
}
