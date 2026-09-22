const searchInput = document.getElementById('search');
const projectItems = document.querySelectorAll('.project-item');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    projectItems.forEach((item) => {
      const title = item.querySelector('.project-title').textContent.toLowerCase();
      if (title.includes(query)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstVisible = Array.from(projectItems).find(
        (item) => !item.classList.contains('hidden')
      );
      if (firstVisible) {
        firstVisible.click();
      }
    }
  });
}
