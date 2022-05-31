const btnStartGachiGame = document.querySelector('.btn__gachi'),
  sectionStartWindow = document.querySelector('.section__start'),
  btnNextDiff = document.querySelectorAll('.btn__diff'),
  sectionDifficultWindow = document.querySelector('.section__difficult'),
  sectionBoardGame = document.querySelector('.cont__game'),
  btnEasy = document.querySelector('.btn__easy'),
  btnFull = document.querySelectorAll('.btn__difful'),
  mainSection = document.querySelector('.section__game'),
  timerText = document.querySelector('.time'),
  btnPause = document.querySelector('.btn__pause'),
  sectionResult = document.querySelector('.section__result'),
  overflowBack = document.querySelector('.overflow'),
  buttonRestartGame = document.querySelector('.button__restart');


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
        section.style.gridTemplateColumns = `repeat(${Math.sqrt(value)}, 7rem)`;
        section.style.gridTemplateRows = `repeat(${Math.sqrt(value)}, 7rem)`;
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.classList.add('activeCard')
        card.style.order = Math.floor(Math.random() * (6 - 1) + 1)
        cnt++;
        card.addEventListener("click", (e) => {
          card.classList.toggle('activeCard');
          CheckCard(e)
        });

      }

    }

  })


}

let count = 0;
const CheckCard = (e) => {
  const tg = e.target;
  tg.classList.add('tab')
  const tabCard = document.querySelectorAll('.tab');
  const allCard = document.querySelectorAll('.card');
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
      overflowBack.classList.add('activeOveflow')
    }, 600)
  }


}


// function predTime(val) {
//   let timer = val * 4;
//   function timerGame() {
//     setTimeout(timerGame, 1000);
//     timerText.textContent = timer;
//     timer--;
//     if (timerText.innerHTML < 0) {
//       timerText.innerHTML = 0;
//       console.log('you lose');
//       setTimeout(() => {
//         location.reload()
//       }, 1000)
//     }

//   }
//   timerGame()
// }




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
  }, 1000)


});

btnFull.forEach(el => [
  el.addEventListener('click', () => {
    sectionDifficultWindow.classList.remove('activeForSelectDifficult');
    sectionBoardGame.classList.add('activeGame');
    setTimeout(() => {
      gameNormalPictureOne(el.value);
      mainSection.classList.add('block');
      predTime(el.value)
    }, 1000)

  })
])


btnPause.addEventListener('click', () => {
  if (btnPause.textContent == 'pause') {
    btnPause.textContent = 'play_arrow';

  }
  else {
    btnPause.textContent = 'pause'
  }
})

buttonRestartGame.addEventListener('click', () => {
  location.reload()
})