// Initialize player and Roboto stats
var player = {
    name: "အဂ္ဂ",
    health: 100,
    attack: 10,
  };
  
  var Roboto = {
    name: "အာနိုလ်း",
    health: 100,
    attack: 8,
  };
  
  // Function to handle player's attack
  function playerAttack() {
    var damage = Math.floor(Math.random() * player.attack) + 1;
    Roboto.health -= damage;
    updateResult(
      " အဂ္ဂလက်သီး တစ်ချက်မြည်း နှပ်ချီးထွက်သွားမယ် " +
        Roboto.name +
        ". " +
        Roboto.name +
        " နုပျို လင်းလက် စွမ်းအင်ထက် အဂ္ဂ သွေးမထွက် " +
        Roboto.health +
        " ကျန်းမာ သန်စွမ်း lion အဖျော်ရည်အစွမ်း."
    );
  
    if (Roboto.health <= 0) {
      endGame("ဂုဏ်ယူပါတယ်! အဂ္ဂနိုင်ပြီ ဟေ့ " + Roboto.name + "!");
    } else {
      setTimeout(computerRobotAttack, 3000); // Delay Roboto's attack for 1 second
    }
  }
  
  // Function to handle Roboto's attack
  function computerRobotAttack() {
    var damage = Math.floor(Math.random() * Roboto.attack) + 1;
    player.health -= damage;
    updateResult(
      Roboto.name +
        " အာနိုလ်းလက်သံ တစ်ချက်ခံ ပုံမှန်ပါပဲ မယိုင်လှဲ " +
        player.health +
        "အရှောင်ကောင်း သုံးချက် ပတ်တီးစီးလျက် အသက်တော့မထွက် ."
    );
  
    if (player.health <= 0) {
      endGame("ပွဲပြီးသွားပြီ! " + Roboto.name + " အဂ္ဂနိုင်ပြီ!");
    }
  }
  
  // Function to update result on the screen
  function updateResult(message) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = message;
  }
  
  // Function to end the game
  function endGame(message) {
    updateResult(message);
    document.getElementById("attack-btn").disabled = true;
  }
  
  // Event listener for attack button
  document.getElementById("attack-btn").addEventListener("click", playerAttack);