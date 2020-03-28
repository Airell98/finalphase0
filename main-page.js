const soil = document.querySelectorAll('.soil');
const corona = document.querySelectorAll('.corona');
const start = document.querySelector('.start');
const score = document.querySelector('.score')
let finish;
let pScore = 0
let previousSoil;

function randomNum(soil) {
	const s = Math.floor(Math.random() * soil.length);
	const sRandom = soil[s];
	if (sRandom === previousSoil) {
		randomNum(soil);
	}
	previousSoil = sRandom;
	return sRandom;
}

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function popCorona() {
	const sRandom = randomNum(soil);
	const wRandom = randomTime(300, 900);
	sRandom.classList.add('pop');

	setTimeout(() => {
		sRandom.classList.remove('pop');
		if (!finish) {
			popCorona();
		}
	}, wRandom);
	// return;
}

function getStarted() {
   finish = false;
  pScore = 0;
  score.innerHTML = 0;
	popCorona();
	setTimeout(() => {
    finish = true;
  }, 10000);
}

function hit(){
  pScore++;
  score.innerHTML = pScore;
  this
}

corona.forEach(c =>{
  c.addEventListener('click',hit)
})