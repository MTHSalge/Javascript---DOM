let button = document.querySelector("#buttonAdd");
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("buttonAdd").disabled = true;
});

document.querySelectorAll(".input").forEach(function (x) {
  x.addEventListener("change", stateHandle);
});

const nodeList = document.querySelectorAll(".input");
let list = [];

function stateHandle() {
  list = [];
  for (i = 0; i < nodeList.length; i++) {
    if (nodeList[i].value != "") {
      list.push(nodeList[i].value);
    }
  }
  if (list.length === 3) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function addPlayer() {
  const playerPosition = document.getElementById("position").value;
  const playerNumber = document.getElementById("number").value;
  const playerName = document.getElementById("name").value;
  const confirmation = confirm(
    `Deseja confirmar a escalação do:\nNome: ${playerName}\nNúmero: ${playerNumber}\nPosição: ${playerPosition}`
  );

  if (confirmation) {
    const sectionTeamList = document.getElementById("team-list");
    const playerList = document.getElementById("player-list");
    const playerLi = document.createElement("li");

    playerLi.id = "player -" + playerNumber;
    playerLi.innerText = `${playerPosition} - ${playerName} - ${playerNumber}`;

    playerList.appendChild(playerLi);
    sectionTeamList.appendChild(playerList);

    document.getElementById("position").value = "";
    document.getElementById("number").value = "";
    document.getElementById("name").value = "";
  } else {
    alert("Cancelando operação.");
    document.getElementById("position").value = "";
    document.getElementById("number").value = "";
    document.getElementById("name").value = "";
    return;
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player -" + number);
  const confirmation = confirm(
    `Deseja remover o jogador ${playerToRemove.innerText}?`
  );

  if (confirmation) {
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
