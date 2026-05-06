document.querySelectorAll('.index-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

const popup      = document.getElementById('address-popup');
const policyPanel = document.getElementById('policy-panel');
const checkbox   = document.getElementById('consent-checkbox');

function closePopup() {
  popup.classList.add('hidden');
}

['btn-new-address', 'btn-existing-address', 'btn-close-popup'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', closePopup);
});

// 보기 클릭 → 약관 패널 노출
document.getElementById('btn-view-policy').addEventListener('click', () => {
  policyPanel.classList.remove('hidden');
});

// 내용을 읽고 동의합니다 클릭 → 체크 후 약관 패널 닫기
document.getElementById('btn-agree-policy').addEventListener('click', () => {
  checkbox.checked = true;
  policyPanel.classList.add('hidden');
});
