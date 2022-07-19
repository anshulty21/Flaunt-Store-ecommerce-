const words = ["You can find almost any shoe here!",
  "Nike , Puma , Addidas , Fila ...!",
  "Get your favourite style here",
  "Perfect size",
  "Comfortable",
  "30% off on all products!",
  "Hurry! Search your pair"
];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      let elem = document.getElementById('typer');
      elem.setAttribute('placeholder', elem.getAttribute('placeholder') + word.shift());
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping,110);
  };
  loopTyping();
  
};


function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typer').setAttribute('placeholder', word.join(""));
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 80);
  };
  loopDeleting();
};

typingEffect();