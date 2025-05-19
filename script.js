import { maekChiKi } from './data/maekChiKi.js';

let index = 0;

const card = document.getElementById('card');
const cardInner = document.getElementById('cardInner');
const front = document.getElementById('front');
const back = document.getElementById('back');
const flipBtn = document.getElementById('flipBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCard() {
  const point = maekChiKi[index];

  front.innerHTML = `
    <strong>${point.romanized}</strong><br/>
    ${point.meridian}<br/>
    <em>${point.english}</em>
    <div class="point-korean">${point.korean}</div>
  `;

  back.innerHTML = `
    <strong>Meaning:</strong> ${point.english}<br/>
    <strong>Healing Use:</strong> ${point.healingUse}<br/>
    <strong>Martial Use:</strong> ${point.martialUse}
  `;
}

// Handle flipping
flipBtn.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Handle next
nextBtn.addEventListener('click', () => {
  card.classList.remove('flipped'); // Reset flip before showing next
  index = (index + 1) % maekChiKi.length;
  updateCard();
});

// Initial card
updateCard();
