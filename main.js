document.querySelectorAll('.index-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
