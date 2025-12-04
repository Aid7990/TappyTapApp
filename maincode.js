var score = 0;
onEvent("startbutton", "click", function() {
  setScreen("Game");
  hideElement("red_button");
  hideElement("gold_button");
  score = 0;  
  setTimeout(function() {
    setScreen("Score");
    setText("finalscoretext", score); 
  }, 5000);
  timedLoop(1000, function() {
    showElement("red_button");
  });
  timedLoop(2000, function() {
    hideElement("red_button");
  });
  setTimeout(function() {
    showElement("gold_button");
  }, randomNumber(1000, 8755));
});
onEvent("resetbutton", "click", function() {
  setScreen("Welcome");
});
onEvent("bluedot_game", "click", function() {
  setPosition("red_button", randomNumber(100, 150), randomNumber(100, 150), randomNumber(50, 150), randomNumber(50, 150));
});
onEvent("red_button", "click", function() {
  score = score - 1;   
  console.log("Score Decreased");
  setText("finalscoretext", score);  
});
onEvent("bluedot_game", "click", function() {
  score = score + 1;   
  console.log("Score Increased");
  setPosition("bluedot_game", randomNumber(100, 150), randomNumber(100, 150), randomNumber(50, 300), randomNumber(50, 300));
  setText("finalscoretext", score);  
});
onEvent("gold_button", "click", function( ) {
  score = score + 5;
  console.log("Score Increased (5)");
  setText("finalscoretext", score);
  hideElement("gold_button");
});
onEvent("info", "click", function( ) {
  setScreen("Info");
});
