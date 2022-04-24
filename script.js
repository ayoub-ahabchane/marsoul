const allMessages = document.querySelector(".messages");
console.log(allMessages);

const btnPrevious = document.querySelector(".message__control--previous");
console.log(btnPrevious);

const btnNext = document.querySelector(".message__control--next");
console.log(btnPrevious);

btnPrevious.addEventListener("click", () => {
  const currentMsg = document.querySelector(".message:not(.hidden)");
  const previousMsg = currentMsg.previousElementSibling;

  currentMsg.classList.toggle("hidden");
  if (!previousMsg) {
    allMessages.lastElementChild.classList.toggle("hidden");
  } else {
    previousMsg.classList.toggle("hidden");
  }
});

btnNext.addEventListener("click", () => {
  const currentMsg = document.querySelector(".message:not(.hidden)");
  const nextMsg = currentMsg.nextElementSibling;

  currentMsg.classList.toggle("hidden");
  if (!nextMsg) {
    allMessages.firstElementChild.classList.toggle("hidden");
  } else {
    nextMsg.classList.toggle("hidden");
  }
});
