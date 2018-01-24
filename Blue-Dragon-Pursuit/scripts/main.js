/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function play() {
  alert("You've searched high and low for the blue dragon. It is here, to the northern stretches of the world, that the great falcon has taken you. But to no avail. It seems as though the sea of stone will be your resting place.");
  answer()
}
function answer() {
  var action = prompt("What are you going to do now? Lay down and die, search the sky above, or rummage in your pack for your final meal? (Type die, search, or meal.)");
  if (action === "die") {
    alert("Suddenly, as you were about to lay down and give in to the injustices of your fate, the great talons of the blue dragon dig into your shoulders as his massive arms launch you into the tangle of jagged rocks ahead. You have just enough time to look back and see the beauty of such a beast right before you realize you left your helmet at the castle. Game over!!!");
  } else if (action === "search") {
    alert("There, racing toward you is the blue dragon himself, disquised by the night sky, like a shade drawing in for the kill of it's prey...");
    search();
  } else if (action === "meal") {
    alert("You reach into your leather pack hanging by your side. There, you find the remaining portion of the fish you caught earlier today. You stand up to stretch but notice that the wind has picked up. Suddenly, the great body of the blue dragon collides into and your food hits the ground, slides between two rocks and disappears, never to be retrieved. You drop your pack, start to run, but it is too late. Who could ever hope to out run a flying serpent, the master of the sky. Game over!!!");
  } else {
    alert("Please try again.");
  }
}
function search() {
  alert("You jump to your feet and tumble to a place behind a tall boulder jetting out of the earth ten feet away. Did he see you? You hope not.");
  var weapon = prompt("As you crouch lower, you start to move toward your chosen weapon of attack. What whill you choose to fight the great blue dragon with? Your sword, bow and arrow, or the sharp rock you just found under your left foot? Choose sword, bow, or rock.");
  if (weapon === "sword") {
    alert("You grab your" + " " + weapon + "just in time to send it deep into the chest of the dragon is it swoops down to attack you.");
    var randomNumber = Math.round(Math.random()*15);
    console.log(randomNumber);
    if (randomNumber <= 5) {
      alert("randomNumber <= 5");
    } else if (randomNumber > 5 && randomNumber < 11) {
      alert("randomNumber > 5 && randomNumber < 11");
    } else if (randomNumber >= 11) {
      alert("randomNumber >= 11");
    }
  }
  if (weapon === "bow") {
    alert("You grab your" + " " + weapon + "...");
  }
  if (weapon === "rock") {
    alert("You look down just for a split second to grab the" + " " + weapon + ", but as you do, it's too late...the enemy caught you off guard and his attack has been fatal. Game over!!!");
  }
}