// Eze's Personal Site - Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Matchday Energy Meter
  const boostBtn = document.getElementById('boostHypeBtn');
  const energyFill = document.getElementById('energyFill');
  const hypeScore = document.getElementById('hypeScore');
  const cheerToast = document.getElementById('hypeCheer');

  let hypeLevel = 100;
  const cheers = [
    "🔥 GLORY GLORY MAN UNITED!",
    "🔴 BRUNO WITH THE ASSIST!",
    "⚡ MAINOO CONTROLLING THE MIDFIELD!",
    "⚽ OLD TRAFFORD ROARING!",
    "🏆 20 TIMES LEAGUE CHAMPIONS!"
  ];

  if (boostBtn) {
    boostBtn.addEventListener('click', () => {
      hypeLevel += 15;
      if (energyFill) {
        energyFill.style.width = '100%';
        energyFill.style.filter = 'brightness(1.4)';
        setTimeout(() => {
          energyFill.style.filter = 'brightness(1)';
        }, 300);
      }
      if (hypeScore) {
        hypeScore.textContent = `${hypeLevel}% ULTRA HYPE`;
      }
      if (cheerToast) {
        const randomCheer = cheers[Math.floor(Math.random() * cheers.length)];
        cheerToast.textContent = randomCheer;
        cheerToast.style.opacity = '1';
        cheerToast.style.transform = 'scale(1.05)';
        setTimeout(() => {
          cheerToast.style.transform = 'scale(1)';
        }, 200);
      }
    });
  }

  // 3. Share Profile / Copy Link
  const shareBtn = document.getElementById('shareProfileBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const originalText = shareBtn.querySelector('.connect-val').textContent;
        shareBtn.querySelector('.connect-val').textContent = 'Copied to Clipboard! 🎉';
        setTimeout(() => {
          shareBtn.querySelector('.connect-val').textContent = originalText;
        }, 2500);
      } catch (err) {
        alert('Site URL: ' + window.location.href);
      }
    });
  }

  // 4. Shoutout Board (localStorage backed)
  const shoutoutInput = document.getElementById('shoutoutInput');
  const sendBtn = document.getElementById('sendShoutoutBtn');
  const feed = document.getElementById('shoutoutFeed');

  const defaultShoutouts = [
    { text: "Up the Reds! 🔴", time: "Just now" },
    { text: "St. Andrews College representing! 🦅", time: "2h ago" }
  ];

  function loadShoutouts() {
    if (!feed) return;
    const stored = JSON.parse(localStorage.getItem('eze_shoutouts') || 'null') || defaultShoutouts;
    feed.innerHTML = stored.map(s => `
      <div class="shoutout-item">
        <span>${escapeHtml(s.text)}</span>
        <span class="shoutout-time">${escapeHtml(s.time)}</span>
      </div>
    `).join('');
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }

  if (sendBtn && shoutoutInput) {
    const handleSend = () => {
      const text = shoutoutInput.value.trim();
      if (!text) return;
      const stored = JSON.parse(localStorage.getItem('eze_shoutouts') || 'null') || defaultShoutouts;
      stored.unshift({ text, time: 'Just now' });
      if (stored.length > 5) stored.pop();
      localStorage.setItem('eze_shoutouts', JSON.stringify(stored));
      shoutoutInput.value = '';
      loadShoutouts();
    };

    sendBtn.addEventListener('click', handleSend);
    shoutoutInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  loadShoutouts();
});
