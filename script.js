var wordInput = document.getElementById("wordsInput");
var wordInputButton = document.getElementById("wordsInputButton");
var randomWordsSection = document.getElementById("randomWords");

var randomWord = randomString(Math.floor(Math.random() * 10) + 1);
randomWordsSection.innerText = randomWord;

function getInputValue() {
  var inputValue = wordInput.value;
  if (inputValue == randomWord) {
    alert("Correct!");
    randomWord = randomString(Math.floor(Math.random() * 10) + 1);
    randomWordsSection.innerText = randomWord;
  } else {
    alert("Not Correct!");
  }
}

function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

wordInputButton.addEventListener("click", getInputValue);
