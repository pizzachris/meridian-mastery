import { maekChiKi } from './data/maekChiKi.js';

let index = 0;

const front = document.getElementById('front');
const back = document.getElementById('back');
const flipBtn = document.getElementById('flipBtn');
const nextBtn = document.getElementById('nextBtn');
const card = document.getElementById('card');

function updateCard() {
  const point = maekChiKi[index];

  front.innerHTML = `
    <div>
      <span style="font-size: 24px; font-weight: bold;">${point.romanized}</span>
      <br/>
      <span style="font-size: 16px; color: #666;">${point.meridian}</span>
      <br/>
      <em style="font-size: 18px; margin-top: 10px;">${point.english}</em>
      <br/>
      <span style="font-size: 28px; color: #c00; margin-top: 10px;">${point.korean}</span>
    </div>
  `;

  back.innerHTML = `
    <div>
      <strong>Meaning:</strong><br/> ${point.english}<br/><br/>
      <strong>Healing Use:</strong><br/> ${point.healingUse}<br/><br/>
      <strong>Martial Use:</strong><br/> ${point.martialUse}
    </div>
  `;
}

flipBtn.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % maekChiKi.length;
  updateCard();
  card.classList.remove('flipped');
});

updateCard();

