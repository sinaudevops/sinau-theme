// Scroll to top button
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Initialize Splide for Popular Posts
  const featuredSlider = document.querySelector('.featured-splide');
  if (featuredSlider && typeof Splide !== 'undefined') {
    new Splide('.featured-splide', {
      type: 'loop',
      perPage: 3,
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      arrows: false,
      gap: '1.5rem',
      breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();
  }

  // --- Custom Table Manipulation Logic ---
  const tableWrappers = document.querySelectorAll('.custom-table-wrapper');

  tableWrappers.forEach((wrapper) => {
    const table = wrapper.querySelector('table');
    if (!table) return;

    // 1. Badge Style Processing
    if (wrapper.classList.contains('style-badge')) {
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 2) {
          const appsCell = cells[1];
          const appsList = appsCell.textContent.split(',').map((s) => s.trim());
          appsCell.innerHTML = ''; // Clear original text
          appsList.forEach((appName) => {
            if (appName) {
              const badge = document.createElement('span');
              badge.className = 'app-badge';
              badge.textContent = appName;
              appsCell.appendChild(badge);
            }
          });
        }
      });
    }

    // 2. Card Style Processing
    if (wrapper.classList.contains('style-card')) {
      const container = document.createElement('div');
      container.className = 'cards-container';
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 2) {
          const title = cells[0].textContent;
          const itemsRaw = cells[1].textContent.split(',').map((s) => s.trim());

          const card = document.createElement('div');
          card.className = 'feature-card';

          const cardTitle = document.createElement('span');
          cardTitle.className = 'card-title';
          cardTitle.textContent = title;

          const cardList = document.createElement('ul');
          cardList.className = 'card-items';

          itemsRaw.forEach((item) => {
            if (item) {
              const li = document.createElement('li');
              li.textContent = item;
              cardList.appendChild(li);
            }
          });

          card.appendChild(cardTitle);
          card.appendChild(cardList);
          container.appendChild(card);
        }
      });

      // Insert cards and hide the original table
      table.style.display = 'none';
      wrapper.appendChild(container);
    }
  });


  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
