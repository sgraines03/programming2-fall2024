document.addEventListener("DOMContentLoaded", () => {
  const pairs = [
    { problem: "1 x 1", match: "1" },
    { problem: "1 x 2", match: "2" },
    { problem: "1 x 3", match: "3" },
    { problem: "1 x 4", match: "4" },
    { problem: "1 x 5", match: "5" },
    { problem: "1 x 6", match: "6" },
    { problem: "1 x 7", match: "7" },
    { problem: "1 x 8", match: "8" },
    { problem: "1 x 9", match: "9" },
    { problem: "1 x 10", match: "10" },
    { problem: "1 x 11", match: "11" },
    { problem: "1 x 12", match: "12" },
    { problem: "2 x 2", match: "4" },
    { problem: "2 x 3", match: "6" },
    { problem: "2 x 4", match: "8" },
    { problem: "2 x 5", match: "10" },
    { problem: "2 x 6", match: "12" },
    { problem: "2 x 7", match: "14" },
    { problem: "2 x 8", match: "16" },
    { problem: "2 x 9", match: "18" },
    { problem: "2 x 10", match: "20" },
    { problem: "2 x 11", match: "22" },
    { problem: "2 x 12", match: "24" },
    { problem: "3 x 3", match: "9" },
    { problem: "3 x 4", match: "12" },
    { problem: "3 x 5", match: "15" },
    { problem: "3 x 6", match: "18" },
    { problem: "3 x 7", match: "21" },
    { problem: "3 x 8", match: "24" },
    { problem: "3 x 9", match: "27" },
    { problem: "3 x 10", match: "30" },
    { problem: "3 x 11", match: "33" },
    { problem: "3 x 12", match: "36" },
    { problem: "4 x 4", match: "16" },
    { problem: "4 x 5", match: "20" },
    { problem: "4 x 6", match: "24" },
    { problem: "4 x 7", match: "28" },
    { problem: "4 x 8", match: "32" },
    { problem: "4 x 9", match: "36" },
    { problem: "4 x 10", match: "40" },
    { problem: "4 x 11", match: "44" },
    { problem: "4 x 12", match: "48" },
    { problem: "5 x 5", match: "25" },
    { problem: "5 x 6", match: "30" },
    { problem: "5 x 7", match: "35" },
    { problem: "5 x 8", match: "40" },
    { problem: "5 x 9", match: "45" },
    { problem: "5 x 10", match: "50" },
    { problem: "5 x 11", match: "55" },
    { problem: "5 x 12", match: "60" },
    { problem: "6 x 6", match: "36" },
    { problem: "6 x 7", match: "42" },
    { problem: "6 x 8", match: "48" },
    { problem: "6 x 9", match: "54" },
    { problem: "6 x 10", match: "60" },
    { problem: "6 x 11", match: "66" },
    { problem: "6 x 12", match: "72" },
    { problem: "7 x 7", match: "49" },
    { problem: "7 x 8", match: "56" },
    { problem: "7 x 9", match: "63" },
    { problem: "7 x 10", match: "70" },
    { problem: "7 x 11", match: "77" },
    { problem: "7 x 12", match: "84" },
    { problem: "8 x 8", match: "64" },
    { problem: "8 x 9", match: "72" },
    { problem: "8 x 10", match: "80" },
    { problem: "8 x 11", match: "88" },
    { problem: "8 x 12", match: "96" },
    { problem: "9 x 9", match: "81" },
    { problem: "9 x 10", match: "90" },
    { problem: "9 x 11", match: "99" },
    { problem: "9 x 12", match: "108" },
    { problem: "10 x 10", match: "100" },
    { problem: "10 x 11", match: "110" },
    { problem: "10 x 12", match: "120" },
    { problem: "11 x 11", match: "121" },
    { problem: "11 x 12", match: "132" },
    { problem: "12 x 12", match: "144" }
  ];

  let cards = document.getElementsByClassName("contentofcards");
  console.log(cards);
  // Fisher-Yates (or Knuth) Shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function shuffleAssign() {
    let shuffledPairs = shuffleArray(pairs);
    console.log(shuffledPairs);
    //shuffle list of pairs
    //create a new array for selected pairs this round
    let cardPairs = [];
    //add first cards. length/2 pairs(word and match to new array)
    for (let i = 0; i < cards.length / 2; i++) {
      cardPairs.push(shuffledPairs[i].problem);
      cardPairs.push(shuffledPairs[i].match);
    }
    console.log(cardPairs);
    //shuffle that array
    cardPairs = shuffleArray(cardPairs);
    //iterate over that array to assign cards
    for (let i = 0; i < cardPairs.length; i++) {
      cards[i].innerText = cardPairs[i];
      cards[i].onclick = isClicked;
    }

    function isClicked(e) {
      let cardClicked = e.srcElement;
      console.log(cardClicked);
    }
  }
  shuffleAssign();
});

// for i
