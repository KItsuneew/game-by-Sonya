const btnStartGachiGame = document.querySelector('.btn__gachi'),
  sectionStartWindow = document.querySelector('.section__start'),
  btnNextDiff = document.querySelectorAll('.btn__diff'),
  sectionDifficultWindow = document.querySelector('.section__difficult'),
  sectionBoardGame = document.querySelector('.cont__game'),
  btnFull = document.querySelectorAll('.btn__difful'),
  mainSection = document.querySelector('.section__game'),
  timerText = document.querySelector('.time'),
  btnPause = document.querySelector('.btn__pause'),
  btnStart = document.querySelector('.btn__start'),
  sectionResult = document.querySelector('.section__result'),
  overflowBack = document.querySelector('.overflow'),
  buttonRestartGame = document.querySelector('.button__restart'),
  yourResult = document.querySelector('.text__your'),
  yourDiff = document.querySelector('.text__diff'),
  yourTime = document.querySelector('.text__time'),
  stepGame = document.querySelector('.btn__step'),
  gameOption = document.querySelector('.game__option'),
  containerResult = document.querySelector('.container__result'),
  yourStep = document.querySelector('.text__steps'),
  btnCloseGuidline = document.querySelector('.btn__guidline'),
  sectionGuidline = document.querySelector('.section__guidline'),
  btnOpenGuidline = document.querySelector('.btn__addGuidline');


const cardGeneratorGachi = () => {

  let cardData = [
    { imgSrc: "./images/one.jpg", id: 1, name: "one" },
    { imgSrc: "./images/two.jpg", id: 2, name: "two" },
    { imgSrc: "./images/three.jpg", id: 3, name: "three" },
    { imgSrc: "./images/four.jpg", id: 4, name: "four" },
    { imgSrc: "./images/five.jpg", id: 5, name: "five" },
    { imgSrc: "./images/six.jpg", id: 6, name: "six" },
    { imgSrc: "./images/seven.jpg", id: 7, name: "seven" },
    { imgSrc: "./images/eight.jpg", id: 8, name: "eight" },
    { imgSrc: "./images/one.jpg", id: 1, name: "one" },
    { imgSrc: "./images/two.jpg", id: 2, name: "two" },
    { imgSrc: "./images/three.jpg", id: 3, name: "three" },
    { imgSrc: "./images/four.jpg", id: 4, name: "four" },
    { imgSrc: "./images/five.jpg", id: 5, name: "five" },
    { imgSrc: "./images/six.jpg", id: 6, name: "six" },
    { imgSrc: "./images/seven.jpg", id: 7, name: "seven" },
    { imgSrc: "./images/eight.jpg", id: 8, name: "eight" },

  ];

  cardData.sort(() => Math.random() - 0.5);

  cardData.forEach((item) => {
    const section = document.querySelector(".cont__game");
    const card = document.createElement("div");
    const back = document.createElement("div");
    const face = document.createElement("img");

    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    back.setAttribute("name", item.name);
    face.src = item.imgSrc;

    card.addEventListener("click", (e) => {
      card.classList.toggle('activeCard');
      CheckCard(e)
    });
  });



};

const gameNormalPictureOne = (value) => {
  let cardData = [
    { imgSrc: "./assets/1.png", name: "1" },
    { imgSrc: "./assets/2.png", name: "2" },
    { imgSrc: "./assets/3.png", name: "3" },
    { imgSrc: "./assets/4.png", name: "4" },
    { imgSrc: "./assets/5.png", name: "5" },
    { imgSrc: "./assets/6.png", name: "6" },
    { imgSrc: "./assets/7.png", name: "7" },
    { imgSrc: "./assets/8.gif", name: "8" },
    { imgSrc: "./assets/9.png", name: "9" },
    { imgSrc: "./assets/10.png", name: "10" },
    { imgSrc: "./assets/11.png", name: "11" },
    { imgSrc: "./assets/12.png", name: "12" },
    { imgSrc: "./assets/13.png", name: "13" },
    { imgSrc: "./assets/14.png", name: "14" },
    { imgSrc: "./assets/15.png", name: "15" },
    { imgSrc: "./assets/16.png", name: "16" },
    { imgSrc: "./assets/17.png", name: "17" },
    { imgSrc: "./assets/18.png", name: "18" },
    { imgSrc: "./assets/19.png", name: "19" },
    { imgSrc: "./assets/20.png", name: "20" },
    { imgSrc: "./assets/21.png", name: "21" },
    { imgSrc: "./assets/22.png", name: "22" },
    { imgSrc: "./assets/23.png", name: "23" },
    { imgSrc: "./assets/24.png", name: "24" },
    { imgSrc: "./assets/25.png", name: "25" },
    { imgSrc: "./assets/26.png", name: "26" },
    { imgSrc: "./assets/27.png", name: "27" },
    { imgSrc: "./assets/28.png", name: "28" },
    { imgSrc: "./assets/29.png", name: "29" },
    { imgSrc: "./assets/30.png", name: "30" },
    { imgSrc: "./assets/31.png", name: "31" },
    { imgSrc: "./assets/32.png", name: "32" },
  ];
  let cnt = 0;
  cardData.sort(() => Math.random() - 0.5);
  cardData.forEach(el => {
    for (let j = 0; j < value.length; j++) {
      const section = document.querySelector(".cont__game");

      if (cnt < value) {
        const card = document.createElement("div");
        const back = document.createElement("div");
        const face = document.createElement("img");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        face.src = el.imgSrc;
        back.setAttribute("name", el.name);
        section.style.gridTemplateColumns = `repeat(${Math.sqrt(value)}, ${(value == 64) ? '5rem' : (value == 36) ? '7rem' : (value == 16) ? '9rem' : 'nice trye)'})`;
        section.style.gridTemplateRows = `repeat(${Math.sqrt(value)}, ${(value == 64) ? '5rem' : (value == 36) ? '7rem' : (value == 16) ? '9rem' : 'nice trye)'})`;
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        timerText.innerHTML = value * 4;
        card.style.order = Math.floor(Math.random() * (6 - 1) + 1)
        cnt++;
        card.style.pointerEvents = 'none';
        card.addEventListener("click", (e) => {
          card.classList.toggle('activeCard');
          CheckCard(e, value)
        });
        timerGame()

      }

    }

  })


}

let count = 0;
const CheckCard = (e, val) => {
  const tg = e.target;
  tg.classList.add('tab')
  const tabCard = document.querySelectorAll('.tab');
  const allCard = document.querySelectorAll('.card');
  const stepText = document.querySelector('.step');

  if (stepText) {
    stepText.textContent--;
  }
  if (tabCard.length == 2) {
    if (tabCard[0].getAttribute('name') == tabCard[1].getAttribute('name')) {
      tabCard.forEach(el => {
        el.classList.remove('tab');
        el.parentNode.style.pointerEvents = 'none';
        count++;
        setTimeout(() => {

        }, 1000)
      })

    }
    else {
      tabCard.forEach(el => {
        el.classList.remove('tab');
        setTimeout(() => {
          el.parentNode.classList.remove('activeCard');
        }, 1000)
      })

    }
  }

  if (allCard.length === count) {
    console.log('you win');
    setTimeout(() => {
      sectionResult.classList.add('activeResult');
      overflowBack.classList.add('activeOveflow');
      yourResult.textContent = 'You WON';
      timerText.style.opacity = '0';
      if (yourStep && stepText) {
        stepText.style.opacity = '0'
        yourStep.textContent = (stepText.textContent == 0) ? 'Your steps: nice try))' : (stepText.textContent > 0) ? `Your steps won for: ${+val + +val / 2 - +stepText.textContent}` : 'nice try';
      }
      yourTime.textContent = `Your time won for: ${val * 4 - timerText.textContent}`
      yourDiff.textContent = (count == 16) ? 'Your difficult: Easy' : (count == 36) ? 'Your difficult: Medium' : (count == 64) ? 'Your difficult: Hard' : 'nice try )';
    }, 600)
  }


}



let timerCode;

function startTimer() {
  const card = document.querySelectorAll('.card');
  timerCode = setInterval(() => {
    timerText.innerHTML = Number(timerText.innerHTML) - 1;
  }, 1000)
  card.forEach(el => {
    el.style.pointerEvents = 'auto'
  })
}


function stopTimer() {
  const card = document.querySelectorAll('.card');
  clearInterval(timerCode);
  card.forEach(el => {
    el.style.pointerEvents = 'none'
  })
}


function timerGame() {

  const stepText = document.querySelector('.step');

  if (timerText.textContent == 0) {

    clearTimeout(timerCode)
    sectionResult.classList.add('activeResult');
    overflowBack.classList.add('activeOveflow');
    yourResult.textContent = 'You LOSE';
    timerText.style.opacity = '0'
    if (yourStep && stepText) {
      stepText.style.opacity = '0'
      yourStep.textContent = (stepText.textContent == 0 || stepText.textContent == stepText.textContent) ? 'Your steps: nice try))' : 'nice try';
    }

    yourTime.textContent = (timerText.textContent == 0) ? 'Your time: nice try))' : (timerText.textContent > 0) ? `Your time: ${val * 4 - timerText.textContent}` : 'nice try';
    yourDiff.textContent = (val == 16) ? 'Your difficult: Easy' : (val == 36) ? 'Your difficult: Medium' : (val == 64) ? 'Your difficult: Hard' : 'nice try )';

  }
  else if (stepText && stepText.textContent == 0) {

    clearTimeout(timerCode)
    timerText.style.opacity = '0';
    sectionResult.classList.add('activeResult');
    overflowBack.classList.add('activeOveflow');
    yourResult.textContent = 'You LOSE';
    stepText.style.opacity = '0';
    yourTime.textContent = (timerText.textContent == 0) ? 'Your time: nice try))' : (timerText.textContent > 0) ? `Your time: ${val * 4 - timerText.textContent}` : 'nice try';
    yourDiff.textContent = (val == 16) ? 'Your difficult: Easy' : (val == 36) ? 'Your difficult: Medium' : (val == 64) ? 'Your difficult: Hard' : 'nice try )';
    yourStep.textContent = (stepText.textContent == 0 || stepText.textContent == stepText.textContent) ? 'Your steps: nice try))' : 'nice try';

  }

}


btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', stopTimer);

btnNextDiff.forEach(el => {
  el.addEventListener('click', () => {
    sectionStartWindow.classList.add('activeBtnForSelectGame');
    sectionDifficultWindow.classList.add('activeForSelectDifficult');
  })
})

btnStartGachiGame.addEventListener('click', () => {
  sectionStartWindow.classList.add('activeBtnForSelectGame');
  sectionBoardGame.classList.add('activeGame');
  setTimeout(() => {
    cardGeneratorGachi();
    mainSection.classList.add('block');
    yourTime.style.display = 'none';
    yourDiff.style.display = 'none'
  }, 1000)


});

btnFull.forEach(el => [
  el.addEventListener('click', () => {
    sectionDifficultWindow.classList.remove('activeForSelectDifficult');
    sectionBoardGame.classList.add('activeGame');
    const step = document.querySelector('.step');
    if (step) {
      step.textContent = Number(el.value) + Number(el.value / 2);
    }
    setTimeout(() => {
      gameNormalPictureOne(el.value);
      mainSection.classList.add('block');
    }, 1000)

  })
])

function openOrCloseGuidline() {
  sectionGuidline.classList.toggle('activeGuidline')
}

btnCloseGuidline.addEventListener('click', openOrCloseGuidline);
btnOpenGuidline.addEventListener('click', openOrCloseGuidline)


stepGame.addEventListener('click', () => {
  let p = document.createElement('p');
  p.classList.add('step');
  gameOption.appendChild(p);

})


buttonRestartGame.addEventListener('click', () => {
  location.reload()
})