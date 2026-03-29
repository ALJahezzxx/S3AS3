// ===== المودال =====
function openModal() {
  document.getElementById('settingsModal').classList.add('active');
}

function closeModal() {
  document.getElementById('settingsModal').classList.remove('active');
}

// إغلاق المودال لو ضغطت برا
document.getElementById('settingsModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// ===== أزرار اللعبة =====
function startGame() {
  // حط هنا رابط صفحة اللعبة
  alert('جاري تحميل اللعبة...');
}

function openDevs() {
  // حط هنا رابط صفحة المطورين
  alert('المطورون: سعاسع Team');
}

// ===== فيديو Google Drive Loop =====
// Google Drive مو يدعم Loop تلقائي، نعيد تحميل الـ iframe لما يخلص
(function loopDriveVideo() {
  const iframe = document.getElementById('bg-iframe');
  if (!iframe) return;

  // كل 10 ثانية نشوف إذا توقف الفيديو ونعيد تشغيله
  // الطريقة الوحيدة الممكنة مع Google Drive بدون API
  const DURATION_MS = 10000; // غيّر هذا الرقم لمدة الفيديو بالميلي ثانية

  function reloadVideo() {
    const src = iframe.src;
    iframe.src = '';
    setTimeout(() => { iframe.src = src; }, 200);
  }

  setInterval(reloadVideo, DURATION_MS);
})();
