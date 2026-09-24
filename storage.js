// storage.js
document.addEventListener('DOMContentLoaded', () => {
  // Restore selected version (diamond or pearl)
  const version = localStorage.getItem('selectedVersion') || 'diamond';
  const diamondBtn = document.querySelector('.diamond-btn');
  const pearlBtn = document.querySelector('.pearl-btn');
  const boxArt = document.getElementById('preorder-box-art');
  if (boxArt) {
    if (version === 'diamond') {
      boxArt.src = 'images/box_diamond.jpg';
      diamondBtn?.classList.add('active');
    } else {
      boxArt.src = 'images/box_pearl.png';
      pearlBtn?.classList.add('active');
    }
  }

  // Switch version on button click and store choice
  document.querySelectorAll('.diamond-btn, .pearl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isDiamond = btn.classList.contains('diamond-btn');
      const newVersion = isDiamond ? 'diamond' : 'pearl';
      localStorage.setItem('selectedVersion', newVersion);
      if (boxArt) {
        boxArt.src = isDiamond ? 'images/box_diamond.jpg' : 'images/box_pearl.png';
      }
      diamondBtn?.classList.toggle('active', isDiamond);
      pearlBtn?.classList.toggle('active', !isDiamond);
    });
  });

  // Simple team builder persisted in localStorage
  const teamKey = 'pokemonTeam';
  const teamList = document.getElementById('team-list');
  const addBtn = document.getElementById('add-to-team');
  const pokemonSelect = document.getElementById('pokemon-select');

  function renderTeam() {
    if (!teamList) return;
    const team = JSON.parse(localStorage.getItem(teamKey) || '[]');
    teamList.innerHTML = '';
    team.forEach((p, i) => {
      const li = document.createElement('li');
      li.textContent = p;
      const rm = document.createElement('button');
      rm.textContent = '✕';
      rm.style.marginLeft = '8px';
      rm.addEventListener('click', () => {
        const newTeam = team.filter((_, idx) => idx !== i);
        localStorage.setItem(teamKey, JSON.stringify(newTeam));
        renderTeam();
      });
      li.appendChild(rm);
      teamList.appendChild(li);
    });
  }

  if (addBtn && pokemonSelect) {
    addBtn.addEventListener('click', () => {
      const selected = pokemonSelect.value;
      if (!selected) return;
      const team = JSON.parse(localStorage.getItem(teamKey) || '[]');
      if (!team.includes(selected)) {
        team.push(selected);
        localStorage.setItem(teamKey, JSON.stringify(team));
        renderTeam();
      }
    });
  }

  renderTeam();
});
