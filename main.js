document.querySelectorAll('.index-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

const popup        = document.getElementById('address-popup');
const policyPanel  = document.getElementById('policy-panel');
const checkbox     = document.getElementById('consent-checkbox');
const consentAlert = document.getElementById('consent-alert');

function closePopup() {
  popup.classList.add('hidden');
}

['btn-new-address', 'btn-close-popup'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', closePopup);
});

// 이전 배송지로 받기 — 동의 미체크 시 알럿
document.getElementById('btn-existing-address').addEventListener('click', () => {
  if (!checkbox.checked) {
    consentAlert.classList.remove('hidden');
    setTimeout(() => consentAlert.classList.add('hidden'), 3000);
    return;
  }
  closePopup();
});

// 보기 클릭 → 드롭다운 토글
document.getElementById('btn-view-policy').addEventListener('click', () => {
  policyPanel.classList.toggle('open');
});

// 내용을 읽고 동의합니다 클릭 → 체크 후 드롭다운 닫기
document.getElementById('btn-agree-policy').addEventListener('click', () => {
  checkbox.checked = true;
  policyPanel.classList.remove('open');
});
