document.querySelectorAll('.index-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

const popup = document.getElementById('address-popup');
const btnNew = document.getElementById('btn-new-address');
const btnExisting = document.getElementById('btn-existing-address');

function closePopup() {
  popup.classList.add('hidden');
}

if (btnNew) btnNew.addEventListener('click', closePopup);
if (btnExisting) btnExisting.addEventListener('click', closePopup);
