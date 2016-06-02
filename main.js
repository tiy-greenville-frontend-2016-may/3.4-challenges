(function(){
  'use strict';

  document.getElementById('header').textContent = 'New Heading';

  /**
   * Challenge 1
   */
  // Below is the beginning code for an awesome game
  // but already suffers a vulnerability that allows
  // the savvy user to open the console and adjust
  // the score to whatever they want. Refactor the
  // code to protect from this.

  // HINT: "global scope" and IIFEs

  (function(){

    var score = 0;

    function increaseScore() {
        score++;
        //console.log(score);
    }

    function decreaseScore() {
        score--;
        //console.log(score);
    }

    function run(){
        // ...
        increaseScore();
    }

    run();

  }());


  /**
   * Challenge 2
   */

  var name = "John";

  (function() {
    console.assert(name === undefined); // 1

    var name = "Jane";

    console.assert(name === "Jane"); // 2
  })();

  console.assert(name === "John"); // 3

}());
