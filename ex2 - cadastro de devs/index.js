const form = document.getElementById("registration-form");
const fullName = document.getElementById("fullName");
const addTechBtn = document.getElementById("addTechBtn");
const submitBtn = document.getElementById("submitBtn");
const devs = [];
let rows = 0;

// Desabilitar botão enquanto não tiver input
document.getElementById("addTechBtn").disabled = true;

document.getElementById("fullName").addEventListener("input", function (event) {
  var content = document.getElementById("fullName").value;

  if (content !== null && content !== "") {
    document.getElementById("addTechBtn").disabled = false;
  } else {
    document.getElementById("addTechBtn").disabled = true;
  }
});

addTechBtn.addEventListener("click", function (ev) {
  const rowInput = document.getElementById("rowInput");
  const newLi = document.createElement("li");
  const rowIndex = rows;
  rows++;

  newLi.id = "inputRow-" + rowIndex;
  newLi.className = "inputRow";

  const techLabel = document.createElement("label");
  const techInput = document.createElement("input");

  techLabel.innerText = "Stack: ";
  techInput.id = "techInput" + rowIndex;
  techInput.name = "techName";

  const radioLabelMain = document.createElement("label");
  const radioLabel1 = document.createElement("label");
  const radioInput1 = document.createElement("input");
  const radioLabel2 = document.createElement("label");
  const radioInput2 = document.createElement("input");
  const radioLabel3 = document.createElement("label");
  const radioInput3 = document.createElement("input");
  radioInput2.type = "radio";
  radioInput3.type = "radio";

  radioLabelMain.innerText =
    "\n\nQuanto tempo de experiência na tecnologia? \n";
  radioLabel1.innerText = "0-2 anos";
  radioInput1.id = "radioInput" + rowIndex + ".1";
  radioInput1.value = "0-2 anos";
  radioInput1.name = "techExp" + rowIndex;
  radioInput1.type = "radio";
  radioLabel1.htmlFor = "techExp-" + rowIndex + ".1";

  radioLabel2.innerText = "3-4 anos";
  radioInput2.id = "radioInput" + rowIndex + ".2";
  radioInput2.value = "3-4 anos";
  radioInput2.name = "techExp" + rowIndex;
  radioInput2.type = "radio";
  radioLabel2.htmlFor = "techExp-" + rowIndex + ".2";

  radioLabel3.innerText = "5+ anos \n\n";
  radioInput3.id = "radioInput" + rowIndex + ".3";
  radioInput3.id = "radioInput" + rowIndex;
  radioInput3.value = "5+ anos";
  radioInput3.name = "techExp" + rowIndex;
  radioInput3.type = "radio";
  radioLabel3.htmlFor = "techExp-" + rowIndex + ".3";

  const buttonRemove = document.createElement("button");
  buttonRemove.type = "button";
  buttonRemove.id = "buttonRemove";
  buttonRemove.innerText = "Remover";

  buttonRemove.addEventListener("click", function () {
    rowInput.removeChild(newLi);
  });

  newLi.append(
    techLabel,
    techInput,
    radioLabelMain,
    radioInput1,
    radioLabel1,
    radioInput2,
    radioLabel2,
    radioInput3,
    radioLabel3,
    buttonRemove
  );
  rowInput.appendChild(newLi);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const inputRows = document.querySelectorAll(".inputRow");

  let techs = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;

    techs.push({ name: techName, exp: techExp });
  });

  const newDev = { fullName: fullName.value, techs: techs };
  devs.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullName.value = "";

  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(devs);
});
