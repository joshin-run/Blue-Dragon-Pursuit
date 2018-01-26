let opening = {
  intro: "You've searched high and low for the mighty blue dragon...but, to no avail. You gaze out over the ocean and watch the waves roll over the gray stones that jut from the sea's fog ridden surface, then let out a deep sign. How can you be expected to find such a beast where the clouded sky, a tangled forest, and the ocean's stoney figures conceal his next scheme? Unless...he finds you first.",
  choose: "The sun now melts into the horizon. Night is fast approaching. The salty wind blows ever colder. You must make haste! Will you sit down and rest for a while and think, explore the sandy terrain, or search your pack for something to eat? 'Never fight an angry dragon on an empty stomach!' you're mother always said. (Type rest, explore, or eat.)"
}

// let intro = {
//   expose: "You've searched high and low for the mighty blue dragon...but, to no avail. The weeks have been long and treacherous. The great falcon, sent by the hand of Lady Nelwyn, has led you to the northern stretches of the world. You watch as the great bird leaps into the air and soon resembles a gray fleck upon heaven's landscape.",
//   alone: "Now, you are alone. The wind is cold and smells like salt. It seems as though the sea of stone and fog before you may be your resting place after all. What will you do now? Lay down and die, search the sky in hopes to find the dragon, or rummage in your pack for your final meal? (Type die, find, or eat.)"
// }

let rocks = "Dark, gray stones jut out from the still surface of the sea before you. Dark, gray stones jut out from the still surface of the sea before you, each one resembling a dragon's face, ... possibility of finding a dragon has become hopeless. unless he finds you first. you"

let firstAction = {
    die: "Suddenly, as you were about to lay down and give in to the injustices of your fate, the great talons of the blue dragon dig into your shoulders as his massive arms launch you into the tangle of jagged rocks ahead. You have just enough time to look back and see the beauty of such a beast right before you realize you left your helmet at the castle. Game over!!!",
    find: "There, racing toward you is the blue dragon himself, disquised by the night sky, like a shade drawing in for the kill of it's prey...",
    eat: "You reach into your leather pack hanging by your side. There, you find the remaining portion of the fish you caught earlier today. You stand up to stretch but notice that the wind has picked up. Suddenly, the great body of the blue dragon collides into and your food hits the ground, slides between two rocks and disappears, never to be retrieved. You drop your pack, start to run, but it is too late. Who could ever hope to out run a flying serpent, the master of the sky. Game over!!!"
}

// let action = prompt("What are you going to do now? Lay down and die, search the sky above, or rummage in your pack for your final meal? (Type die, search, or meal.)");

// document.getElementById("banner-logo").style.display = intro[1]
function reset() {
  location.reload();
}

function play() {
  document.getElementById("banner-logo").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("play-button").style.display = "none";
  document.getElementById("game-play").style.display = "flex";
  document.getElementById("story").innerHTML = opening.intro;
}

function next() {
  document.getElementById("story-board-image").style.backgroundImage = "url(./assets/images/sunset.jpg)";
  document.getElementById("story").innerHTML = opening.choose;
  document.getElementById("user-input").style.display = "block";
  // let input = document.getElementById("story").createElement("INPUT");
  // input.appendChild(document.createTextNode("test"));
  // document.body.appendChild(input);
}

let node = document.getElementById('user-input');
let action = document.getElementById('user-input').value;
node.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (action === "die") {
      document.getElementById("banner-content").innerHTML = firstAction.die;
    } else if (action === "find") {
      document.getElementById("banner-content").innerHTML = firstAction.find;
    } else if (action === "eat") {
      document.getElementById("banner-content").innerHTML = firstAction.eat;
    } else {
      console.log("next() logged");
    }
  }
});

// function answerOne() {
//   // if (!e) e = window.event;
//   // if (e.keyCode == '13'){
//   let action = document.getElementById("user-input").value;
//   if(characterCode == 13) {
//     if (action === "die") {
//       document.getElementById("banner-content").innerHTML = firstAction.die;
//     } else if (action === "find") {
//       document.getElementById("banner-content").innerHTML = firstAction.find;
//     } else if (action === "eat") {
//       document.getElementById("banner-content").innerHTML = firstAction.eat;
//     } else {
//       console.log("next() logged");
//     }
//     return true;
//   }
// }


// document.getElementById("user-input").addEventListener("click", answerOne());

// function answerOne () {
//   console.log("answerOne");
//   let action = document.getElementById("user-input").value;
//   if (action === "die") {
//     document.getElementById("banner-content").innerHTML = firstAction.die;
//   } else if (action === "find") {
//     document.getElementById("banner-content").innerHTML = firstAction.find;
//   } else if (action === "eat") {
//     document.getElementById("banner-content").innerHTML = firstAction.eat;
//   } else {
//     console.log("next() logged");
//   }
// }
// document.getElementById("play-content").innerHTML = intro;

// function nextButton() {
//
// }


// function search() {
//   document.getElementById("demo").innerHTML = prompt.search.jump;
//   alert("You jump to your feet and tumble to a place behind a tall boulder jetting out of the earth ten feet away. Did he see you? You hope not.");
//   let weapon = prompt("As you crouch lower, you start to move toward your chosen weapon of attack. What whill you choose to fight the great blue dragon with? Your sword, bow and arrow, or the sharp rock you just found under your left foot? Choose sword, bow, or rock.");
//   if (weapon === "sword") {
//     alert("You grab your" + " " + weapon + "just in time to send it deep into the chest of the dragon is it swoops down to attack you.");
//     let randomNumber = Math.round(Math.random()*15);
//     console.log(randomNumber);
//     if (randomNumber <= 5) {
//       alert("randomNumber <= 5");
//     } else if (randomNumber > 5 && randomNumber < 11) {
//       alert("randomNumber > 5 && randomNumber < 11");
//     } else if (randomNumber >= 11) {
//       alert("randomNumber >= 11");
//     }
//   }
//   if (weapon === "bow") {
//     alert("You grab your" + " " + weapon + "...");
//   }
//   if (weapon === "rock") {
//     alert("You look down just for a split second to grab the" + " " + weapon + ", but as you do, it's too late...the enemy caught you off guard and his attack has been fatal. Game over!!!");
//   }
// }
