document.querySelectorAll('.index-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

const popup = document.getElementById('address-popup');

function closePopup() {
  popup.classList.add('hidden');
}

['btn-new-address', 'btn-existing-address', 'btn-close-popup'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', closePopup);
});
