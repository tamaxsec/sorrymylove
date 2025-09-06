"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const bgMusic = document.getElementById("bg-music");
const yesMusic = document.getElementById("yes-music");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = 
    "YEAYYYYY KAMU MAAFIN AKU.Aku sayang banget sama kamu, meskipun aku selalu bikin kamu kesel tapi aku sayang banget sama kamu, kamu tetap orang yang penting buat aku, jadi aku mau kamu ceria lagii<br>" +
    "Aku tau aku salah, aku janji bakal berubah jadi lebih baik lagi buat kamu sayang, maafin aku yaa<br>" +
    "<span>Thank you udah maafin aku sayangkuu MUACHHHH MUACHHHH</span>";
  
buttonsContainer.classList.add("hidden");
  changeImage("yes");
  bgMusic.pause(); // Pause background music
  yesMusic.currentTime = 0; // Restart from beginning
  yesMusic.play(); // Play music when "Yes" is clicked
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Tidak mau, aku masih ngambek hmmphh",
    "BODOOOOO AKU MASIH NGAMBEKKK ( ｡ •̀ ⤙ •́ ｡ )",
    "GABAKAL PERNAH AKU MAAFIN KAMU POKOKNYA ( ｡ •̀ ᴖ •́ ｡)",
    "AKU MASIH NGAMBEK DAN GABAKAL MAAFIN KAMU ( ｡ •́︿•̀ ｡)",
    "GABAKAL AKU MAAFIN KAMU SAMPE KAMU NANGIS NANGIS MINTA MAAFIN AKU ૮₍ ˃ ⤙ ˂ ₎ა",
    "HMMMM ( ｡ •́︿•̀ ｡)",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function enableBgMusic() {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    bgMusic.play();
  }
}

yesButton.addEventListener("click", enableBgMusic);
noButton.addEventListener("click", enableBgMusic);

